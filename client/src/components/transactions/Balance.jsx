import React, { useMemo } from 'react'
import { useTransactions } from '../../context/TransactionsContext'

export function Balance () {
  const { transactions } = useTransactions()

  const balance = useMemo(
    () =>
      parseFloat(
        transactions.reduce(
          (acumulator, current) => acumulator + (current.amount || 0),
          0
        )
      ).toFixed(2),
    [transactions]
  )

  return <p className="text-2xl font-semibold">Balance {balance} PLN</p>
}
