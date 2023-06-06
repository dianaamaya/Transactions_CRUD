import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { MainTransactions } from './components/MainTransactions'
import { About } from './components/About'
import { NoMatch } from './components/NoMatch'
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { TransactionProvider } from './context/TransactionsContext'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <TransactionProvider>
                <MainTransactions />
              </TransactionProvider>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
