import React, { useState, useEffect, useCallback } from 'react'
import { useTransactions } from '../../context/TransactionsContext'
import { ModalUpdateForm } from './ModalUpdateForm'
import { ModalDelete } from './ModalDelete'
import { ReactComponent as IconSquares } from '../../assets/squares.svg'
import { ReactComponent as IconList } from '../../assets/list.svg'
import { ListView } from './ListView'
import { GridView } from './GridView'

export function Transactions () {
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [listView, setListView] = useState(true)
  const { transactions, filter } = useTransactions()

  useEffect(() => {
    if (filter.beneficiary) {
      const filteredData = transactions?.filter((transaction) =>
        transaction.beneficiary.toLowerCase().includes(filter.beneficiary))

      setFilteredTransactions(filteredData)
    }
  }, [transactions, filter.beneficiary])

  const handleCloseModal = () => {
    setShowModal(false)
    setShowDeleteModal(false)
    setSelectedTransaction(null)
  }

  const handleUpdateButton = useCallback((transaction) => {
    setSelectedTransaction({ ...transaction })
    setShowModal(true)
  }, [])

  const handleDeleteButton = useCallback((transaction) => {
    setSelectedTransaction({ ...transaction })
    setShowDeleteModal(true)
  }, [])

  return (
    <>
      <div className="flex justify-between items-center bg-neutral-100 rounded-md p-4 mb-8">
        <h2 className="text-center font-medium text-lg">My Transactions</h2>
        {
          listView
            ? <IconSquares className='cursor-pointer w-8' onClick={() => setListView(false)} />
            : <IconList className='cursor-pointer w-8' onClick={() => setListView(true)}/>
        }

      </div>

      {
        listView
          ? (<ListView
                transactions={
                  filter.beneficiary ? filteredTransactions : transactions
                }
                handleUpdateButton={handleUpdateButton}
                handleDeleteButton={handleDeleteButton}
             />)
          : (<GridView
                transactions={
                  filter.beneficiary ? filteredTransactions : transactions
                }
                handleUpdateButton={handleUpdateButton}
                handleDeleteButton={handleDeleteButton}
            />)
      }

      {
        showModal
          ? (<ModalUpdateForm
            handleCloseModal={handleCloseModal}
            transaction={selectedTransaction}
          />)
          : null
      }
      {
        showDeleteModal
          ? (<ModalDelete
            handleCloseModal={handleCloseModal}
            transactionId={selectedTransaction.id}
          />)
          : null
      }
    </>
  )
}
