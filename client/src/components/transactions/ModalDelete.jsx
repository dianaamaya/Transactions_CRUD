import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as IconTrash } from '../../assets/trash.svg'
import { ReactComponent as IconDanger } from '../../assets/danger.svg'
import { useTransactions } from '../../context/TransactionsContext'

export function ModalDelete ({ handleCloseModal, transactionId }) {
  const { deleteTransaction } = useTransactions()

  console.log('render modal delete')
  const handleDelete = () => {
    deleteTransaction(transactionId)
    handleCloseModal()
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl p-2">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between gap-6 p-6 rounded-t">
              <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <IconDanger className="w-9" />
              </div>

              <div className="relative flex-auto">
                <h3 className="text-lg font-semibold">Delete transaction</h3>

                <p>
                  You will lose this information by deleting the selected
                  transaction (id {transactionId}). This action cannot be
                  undone.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end border-solid border-slate-200 rounded-b p-6 pt-0">
              <button
                className="bg-gray-200 text-sm px-4 py-2 rounded-md outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleCloseModal()}
              >
                Cancel
              </button>
              <button
                className="bg-rose-800 text-white text-sm px-4 py-2 rounded-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                onClick={handleDelete}
              >
                <IconTrash className="w-6 inline-block pr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

ModalDelete.propTypes = {
  transactionId: PropTypes.number.isRequired,
  handleCloseModal: PropTypes.func.isRequired
}
