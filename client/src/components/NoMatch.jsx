import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as IconSearch } from '../assets/search.svg'

export function NoMatch () {
  const navigate = useNavigate()

  return <div className='px-8 py-12 max-w-5xl mx-auto text-center'>
    <IconSearch className='text-center w-12 inline-block mb-3' />
    <h1 className='text-2xl font-semibold mb-3'>You got lost!</h1>
    <h3>We are very sorry. The page you are looking for doesn’t exist (anymore).</h3>
    <button onClick={() => navigate('/')}
            className='bg-lime-900 text-white px-4 py-2 rounded-md mt-8'>
        Go back
    </button>
  </div>
}
