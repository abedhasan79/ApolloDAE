import React, {useState, useEffect} from 'react'
import { Login } from '../Login'
import Cart from '../Cart'
import { Contact } from '../Contact'
import Searchbar from '../Serchbar'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'

const Nav = ({ data: data2 }) => {

const [prevScrollPos, setPrevScrollPos] = useState(0)
const [visible, setVisible] = useState(true)
//sets it so when users scroll navbar will disappear but once users scroll up it will reappear
const handleScroll = () => {
  const currentScrollPos = window.scrollY

  if (currentScrollPos > prevScrollPos) {
    setVisible(false)
  } else {
    setVisible(true)
  }

  setPrevScrollPos(currentScrollPos)
}

useEffect(() => {
  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)
})




  let Links = []
  if (data2 && data2.user.isAdmin) {
    Links = [
      { name: 'Dashboard', link: '/admin' },
      {
        name: !Auth.loggedIn() ? (
          <Login />
        ) : (
          <a onClick={() => Auth.logout()} href='/'>
            Logout
          </a>
        )
      }
    ]
  } else {
    Links = [
      { name: 'Home', link: '/' },
      { name: <Contact /> },
      {
        name: !Auth.loggedIn() ? (
          <Login />
        ) : (
          <a onClick={() => Auth.logout()} href='/'>
            Logout
          </a>
        )
      },
      {
        name: Auth.loggedIn() ? <Link to='/orderHistory'>Orders</Link> : null
      },
      { name: <Cart /> }
    ]
  }

  return (
    <div className={` bg-slate-700 h-14 sticky ${visible ? 'top-0' : ''} `}>
      <div className='md:flex items-center bg-sky-900 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <a className="nav3" href='/'>
            {' '}
            <span class='text-white'>Apollo</span>
            <span class='text-blue-400'>D</span>
            <span class='text-purple-500'>A</span>
            <span class='text-fuchsia-300'>E</span>
          </a>
        </div>
        <ul className='nav5 md:flex md:items-center'>
          {Links.map(link => (
            <li key={link.name} className='nav1 md:ml-8 text-xl'>
              <a
                href={link.link}
                className='nav4 text-white hover:text-red-800 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <form className='nav2 w-full px-4'>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <Searchbar />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Nav
