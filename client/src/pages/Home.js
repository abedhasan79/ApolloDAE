import React from 'react'
import ProductList from '../components/ProductList'
import { Banner } from '../components/Banner'
import { Testing } from "../components/Testing"


const style = {
  hw: {
    marginTop: '15vh'
  }
}

const Home = () => {

  return (
    <div style={style.hw}>

      <Banner />
      <div>
        <Testing />
        <ProductList />
      </div>
    </div>
  )
}

export default Home
