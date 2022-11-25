import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import CategoryMenu from '../components/CategoryMenu'
import { Banner } from '../components/Banner'

import { FaMoon, FaSun } from 'react-icons/fa'

const style = {
  hw: {
    marginTop: '30vh'
  }
}

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      className={
        darkMode ? 'app-container dark-mode' : 'app-container light-mode'
      }
    >
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
      <div style={style.hw}>
        <Banner />
        <div>
          <CategoryMenu />
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Home
