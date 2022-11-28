import React from 'react'
import ProductList from '../components/ProductList'
import { Banner } from '../components/Banner'
import { Testing } from "../components/Testing"




const Home = () => {

  return (
    // <div
    //   className={
    //     darkMode ? 'app-container dark-mode' : 'app-container light-mode'
    //   }
    // >
    //   <div className='theme-switch'>
    //     {!darkMode ? (
    //       <span onClick={() => setDarkMode(!darkMode)}>
    //         <FaMoon className='fa-icon' />
    //       </span>
    //     ) : (
    //       <span onClick={() => setDarkMode(!darkMode)}>
    //         <FaSun className='fa-icon' />
    //       </span>
    //     )}
    //   </div>

    // </div>

    <div   className='bannerMedia'>


      <Banner />
      <div>
        <Testing />
        <ProductList />
      </div>
    </div>
  )
}

export default Home


