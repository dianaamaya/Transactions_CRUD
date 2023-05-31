import React from 'react'
import PropTypes from 'prop-types'
import { GridViewItem } from './GridViewItem'

export function GridView ({
  transactions,
  handleUpdateButton,
  handleDeleteButton
}) {
  return (
    <div className="grid sm:grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        transactions?.map((transaction) => (
          <GridViewItem key={transaction.id}
                        transaction={transaction}
                        handleUpdateButton={handleUpdateButton}
                        handleDeleteButton={handleDeleteButton} />
        ))
      }
    </div>
  )
}

GridView.propTypes = {
  transactions: PropTypes.array.isRequired,
  handleUpdateButton: PropTypes.func.isRequired,
  handleDeleteButton: PropTypes.func.isRequired
}
