import React from 'react'
import ProductList from '../components/Admin/ProductList'
import AddProductFrom from '../components/Admin/AddProductFrom'
import { QUERY_USER } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
const style = {
  hw: {
    marginTop: '10vh'
  },

  hw2: {
    marginTop: '10vh',
    marginBottom: '10vh'
  }
}

const Admin = () => {
  const { data } = useQuery(QUERY_USER)

  return (
    <div className='container' style={style.hw2}>
      {data && data.user.isAdmin ? (
        <div>
          Welcome back, Admin!
          <AddProductFrom />
          <ProductList />
        </div>
      ) : (
        <h1 class="text-center">
          <Link to='/'>
            {' '}
            YOU NEED TO LOG IN AS A ADMIN TO USE THIS PAGE.{' '}
            <button class='text-red-400'>
              CLICK HERE TO GO BACK TO HOME PAGE.
            </button>
          </Link>
        </h1>
      )}
    </div>
  )
}

export default Admin
