import React, { memo } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { ReactComponent as IconUpdate } from '../../assets/update.svg'
import { ReactComponent as IconTrash } from '../../assets/trash.svg'

export const ListViewItem = memo(function ListViewItem ({ transaction, handleUpdateButton, handleDeleteButton }) {
  console.log('render list item', transaction.id)
  return (
    <tr
            key={transaction.id}
            className="flex flex-col even:bg-slate-50 md:border md:table-row"
          >
            <td className="pb-5 p-2 md:pb-2 break-words text-right md:text-left">
              <span className="bg-slate-100 md:bg-transparent p-2 md:p-0 rounded-md leading-relaxed">
                {transaction.id}
              </span>
            </td>
            <td className="p-2 whitespace-nowrap border md:border-0">
              <b className="md:hidden pr-2">Amount</b>
              {transaction.amount} PLN
            </td>
            <td className="p-2 break-words border md:border-0">
              <b className="md:hidden pr-2">Beneficiary</b>
              {transaction.beneficiary}
            </td>
            <td className="p-2 break-all min-w-[150px] border md:border-0">
              <b className="md:hidden pr-2">Account</b>
              {transaction.account}
            </td>
            <td className="p-2 min-w-[100px] md:w-[120px] border md:border-0">
              <b className="md:hidden pr-2">Date</b>
              {moment(transaction.date).format('lll')}
            </td>
            <td className="p-2 border md:border-0">
              <b className="md:hidden pr-2">Description</b>
              {transaction.description}
            </td>
            <td className="p-2 order-first">
              <div className="mt-4 text-white flex gap-3 justify-end md:justify-center items-start">
                <button
                  className="flex justify-center items-center bg-sky-600 text-sm px-4 py-2 md:px-2 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleUpdateButton(transaction)}
                >
                  <IconUpdate className="w-4 inline-block" />
                  <span className="md:hidden inline-block pl-2">Update</span>
                </button>
                <button
                  className="flex justify-center items-center bg-rose-800 text-sm px-4 py-2 md:px-2 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  onClick={() => handleDeleteButton(transaction)}
                >
                  <IconTrash className="w-4 inline-block" />
                  <span className="md:hidden inline-block pl-2">Delete</span>
                </button>
              </div>
            </td>
          </tr>
  )
})

ListViewItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  handleUpdateButton: PropTypes.func.isRequired,
  handleDeleteButton: PropTypes.func.isRequired
}
