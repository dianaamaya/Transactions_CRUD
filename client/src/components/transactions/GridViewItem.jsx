import React, { memo } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { ReactComponent as IconUpdate } from '../../assets/update.svg'
import { ReactComponent as IconTrash } from '../../assets/trash.svg'

export const GridViewItem = memo(function GridViewItem ({ transaction, handleUpdateButton, handleDeleteButton }) {
  return (
    <div
          key={transaction.id}
          className="border p-4 rounded-md flex flex-col justify-between"
        >
          <div>
            <p>
              <b>Id:</b> {transaction.id}
            </p>
            <p>
              <b>Amount:</b> {transaction.amount}
            </p>
            <p>
              <b>Beneficiary:</b> {transaction.beneficiary}
            </p>
            <p>
              <b>Account:</b> {transaction.account}
            </p>
            <p>
              <b>Date:</b> {moment(transaction.date).format('lll')}
            </p>
            <p>
              <b>Description:</b> {transaction.description}
            </p>
          </div>
          <div className="mt-4 text-white flex gap-3 justify-center sm:justify-end">
            <button
              className="flex justify-center items-center bg-sky-600 text-sm px-4 py-2 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              onClick={() => handleUpdateButton(transaction)}
            >
              <IconUpdate className="w-6 inline-block pr-2" />
              Update
            </button>
            <button
              className="flex justify-center items-center bg-rose-800 text-sm px-4 py-2 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              onClick={() => handleDeleteButton(transaction)}
            >
              <IconTrash className="w-6 inline-block pr-2" />
              Delete
            </button>
          </div>
        </div>
  )
})

GridViewItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  handleUpdateButton: PropTypes.func.isRequired,
  handleDeleteButton: PropTypes.func.isRequired
}
