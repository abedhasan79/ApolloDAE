//import all required
import { useState } from 'react'
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useStoreContext } from '../../utils/GlobalState'
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions'
import { QUERY_CATEGORIES } from '../../utils/queries'
import { idbPromise } from '../../utils/helpers'
import './style.css'

const SideBar = () => {
  const [state, dispatch] = useStoreContext()

  const { categories } = state

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES)

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      })
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category)
      })
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        })
      })
    }
  }, [categoryData, loading, dispatch])

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    })
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {!isOpen ? (
        <button
          className='fixed z-30 flex items-center cursor-pointer right-5 top-8'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill='black' viewBox='0 0 100 80' width='20' height='20'>
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        </button>
      ) : (
        <button
          class='text-xl text-white fixed top-4 right-4 z-10'
          onClick={() => setIsOpen(!isOpen)}
        >
          x
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-sky-800 w-[23vw] h-full p-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <h2 className=' test2 text-4xl text-white'>Shop by Department</h2>
        <ul class='mt-4 text-3xl cursor-pointer'>
          {categories.map(item => (
            <li
              className='test hover:text-red-800 mt-9'
              key={item._id}
              onClick={() => {
                handleClick(item._id)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
