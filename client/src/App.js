import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { Main } from './components/Main'
import { StoreProvider } from './utils/GlobalState'

import { FaMoon, FaSun } from 'react-icons/fa'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !==null){
      setDarkMode(JSON.parse(data));
    }
  }, []);
  
  useEffect(()=>{
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(darkMode));
  },[darkMode]);

  


  return (
    <ApolloProvider client={client}>
      <div
        className={
          darkMode ? 'app-container dark-mode' : 'app-container light-mode'
        }
      >

        <Router>
          <div>
            <StoreProvider>
              <Main />
              <div className='theme-switch'>
                {!darkMode ? (
                  <span onClick={() => setDarkMode(!darkMode)}>
                    <FaMoon className='fa-icon' />
                  </span>
                ) : (
                  <span onClick={() => setDarkMode(!darkMode)}>
                    <FaSun className='fa-icon' />
                  </span>
                )}
              </div>
            </StoreProvider>
          </div>
        </Router>
      </div>

    </ApolloProvider>
  )
}

export default App
