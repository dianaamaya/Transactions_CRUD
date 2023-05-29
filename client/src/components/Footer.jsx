import React from 'react'
import moment from 'moment'

export function Footer () {
  console.log('render footer')
  return (
    <footer className="fixed bottom-0 w-full text-center bg-neutral-100 z-10">
      <div className="px-8 py-2 max-w-5xl mx-auto">
        Copyright © Transactions APP {moment().format('YYYY')}
      </div>
    </footer>
  )
}
