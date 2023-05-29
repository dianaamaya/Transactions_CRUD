import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconLogo } from '../assets/logo.svg'
import { ReactComponent as IconQuestion } from '../assets/question.svg'
import { ReactComponent as IconTransactions } from '../assets/transactions.svg'
import { ReactComponent as IconMenu } from '../assets/menu.svg'

export function Header () {
  const [navbarOpen, setNavbarOpen] = useState(false)
  console.log('render header')

  return (
    <header className="sticky top-0 bg-rose-800 text-white z-10">
      <nav className="relative flex flex-wrap items-center justify-between px-8 py-3 mb-3 max-w-5xl mx-auto">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <IconLogo className="w-10 inline-block pr-2" />
              Transactions App
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <IconMenu className="w-10" />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? ' flex' : ' hidden'
            }`}
          >
            <ul
              className={`flex flex-col lg:flex-row list-none lg:ml-auto${
                navbarOpen ? '  w-full border' : ''
              }`}
            >
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <IconTransactions className="w-6 inline-block" />
                  <span className="ml-2">Transactions</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  onClick={() => setNavbarOpen(false)}
                  className="pl-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <IconQuestion className="w-6 inline-block" />
                  <span className="ml-2">About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
