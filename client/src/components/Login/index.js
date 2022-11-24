import React, { useState } from 'react'
import '../../Modal.css'

export function Login () {
  
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  

  return (
    <>
      <button onClick={toggleModal}>Login</button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='relative flex flex-col justify-center overflow-hidden'>
              <div className='w-full p-6 m-auto bg-white shadow-md lg:max-w-xl'>
                <h1 className='text-3xl text-center'>
                  🔆Apollo<span class='text-blue-400'>D</span>
                  <span class='text-purple-500'>A</span>
                  <span class='text-fuchsia-300'>E</span>
                </h1>
                <h1 className='text-2xl text-center text-purple-700'>
                  Please Login
                </h1>
                <form className='mt-6'>
                  <div className='mb-2'>
                    <label
                      for='email'
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                  <div className='mb-2'>
                    <label
                      for='password'
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                  <a href='#' className='text-xs text-blue-600 hover:underline'>
                    Forget Password?
                  </a>
                  <div className='mt-6'>
                    <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
                      Login
                    </button>
                  </div>
                </form>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                  {' '}
                  Don't have an account?{' '}
                  <a
                    href='#'
                    className='font-medium text-blue-600 hover:underline'
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <button className='close-modal' onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}