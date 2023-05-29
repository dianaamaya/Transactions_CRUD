import React from 'react'
import PropTypes from 'prop-types'
import { ListViewItem } from './ListViewItem'

export function ListView ({
  transactions,
  handleUpdateButton,
  handleDeleteButton
}) {
  console.log('list rendering')
  return (
    <table className="border-spacing-6 border w-full">
      <thead className="hidden md:table-header-group">
        <tr className="border">
          <th className="p-2">Id</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Beneficiary</th>
          <th className="p-2">Account</th>
          <th className="p-2">Date</th>
          <th className="p-2">Description</th>
          <th className="p-2"></th>
        </tr>
      </thead>
      <tbody data-testid="transactions-list">
        {
          transactions?.map((transaction) => (
            <ListViewItem key={transaction.id}
                          transaction={transaction}
                          handleUpdateButton={handleUpdateButton}
                          handleDeleteButton={handleDeleteButton} />
          ))
        }
      </tbody>
    </table>
  )
}

ListView.propTypes = {
  transactions: PropTypes.array.isRequired,
  handleUpdateButton: PropTypes.func.isRequired,
  handleDeleteButton: PropTypes.func.isRequired
}
