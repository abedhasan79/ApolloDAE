import React from 'react'
import ProductList from '../components/ProductList'
import { Banner } from '../components/Banner'
import { Testing } from "../components/Testing"




const Home = () => {

  return (


    <div className='bannerMedia'>


      <Banner />
      <div>
        <Testing />
        <ProductList />
      </div>
    </div>
  )
}

export default Home


