import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import PropTypes from 'prop-types'
const TransactionContext = createContext()

export const useTransactions = () => {
  const context = useContext(TransactionContext)
  if (!context) throw new Error('useTasks must be used within a TasksProvider')
  return context
}

const initialFilter = {
  beneficiary: ''
}

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState(initialFilter)

  const basicURL = process.env.REACT_APP_GET_TRANSACTION_API || 'http://localhost:8080/api'

  useEffect(() => {
    const controller = new AbortController()
    getTransactions(controller.signal)

    return () => {
      controller.abort()
    }
  }, [])

  const getTransactions = async (signal) => {
    try {
      const { data } = await axios.get(`${basicURL}/all`, { signal })
      setTransactions(data)
    } catch (error) {
      if (error?.code !== 'ERR_CANCELED') {
        toast.error('Error getting transactions')
      }
    }
  }

  const createTransaction = async (transaction) => {
    try {
      const newTransaction = {
        ...transaction,
        amount: parseFloat(transaction.amount) || 0,
        account: `PL${transaction.account}`
      }

      const { data } = await axios.post(`${basicURL}/save`, newTransaction)
      setTransactions([...transactions, data])
      toast.success('Transaction created successfully')
    } catch (error) {
      toast.error('Transaction could not be created')
    }
  }

  const updateTransaction = async (updatedTask) => {
    try {
      const newTransaction = {
        ...updatedTask,
        amount: parseFloat(updatedTask.amount) || 0,
        account: `PL${updatedTask.account}`
      }
      await axios.post(`${basicURL}/save`, newTransaction)
      setTransactions([
        ...transactions.map((task) =>
          task.id === updatedTask.id ? { ...task, ...newTransaction } : task
        )
      ])
      toast.success('Transaction updated successfully')
    } catch (error) {
      toast.error('Transaction could not be updated')
    }
  }

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${basicURL}/delete/${id}`)
      setTransactions([...transactions.filter((task) => task.id !== id)])
      toast.success('Transaction deleted successfully')
    } catch (error) {
      toast.error('Transaction could not be deleted')
    }
  }

  const updateFilter = (updatedFilter) => {
    setFilter({ ...filter, ...updatedFilter })
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        updateTransaction,
        deleteTransaction,
        filter,
        updateFilter
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired
}
