import { Routes, Route } from 'react-router-dom'
import Admin from '../../pages/Admin'
import Home from '../../pages/Home'
import Detail from '../../pages/Detail'
import NoMatch from '../../pages/NoMatch'
import { Login } from '../Login'
import Signup from '../../pages/Signup'
import Nav from '../../components/Nav'
import SideBar from '../../components/Sidebar'
import Success from '../../pages/Success'
import OrderHistory from '../../pages/OrderHistory'
import EditProduct from '../../components/Admin/EditProduct'
import { Footer } from '../../components/Footer'
import { QUERY_USER } from '../../utils/queries'
import { useQuery } from '@apollo/client'

export const Main = () => {
  const { data, loading } = useQuery(QUERY_USER)
  if (!loading) {
    return (
      <div>
        <Nav data={data} />
        
        <Routes>
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/success' element={<Success />} />
          <Route path='/orderHistory' element={<OrderHistory />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/admin/products/:id' element={<EditProduct />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        <Footer />
        <SideBar />
      </div>
    )
  } else {
    return (
      <div>
        <img
          src='https://cdn.dribbble.com/users/1782673/screenshots/4683964/ezgif.com-video-to-gif__2_.gif'
          style={{ width: '100%' }}
        ></img>
      </div>
    )
  }
}
