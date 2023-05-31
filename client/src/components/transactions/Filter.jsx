import React from 'react'
import { useTransactions } from '../../context/TransactionsContext'
import { ReactComponent as IconSearch } from '../../assets/search.svg'

export function Filter () {
  const { updateFilter } = useTransactions()

  const handleFilter = (e) => {
    updateFilter({
      beneficiary: e.target.value.toLocaleLowerCase()
    })
  }

  return (
    <>
      <IconSearch className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
      <input
        className="search-beneficiary block border rounded-md w-full pl-12 pr-4 py-2"
        type="search"
        onChange={handleFilter}
        placeholder="Search beneficiary..."
      />
    </>
  )
}
