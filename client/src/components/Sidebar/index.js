import React from 'react'
import { useState } from 'react'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Categories = [ 
    {name: "Electronics", link:"/"},
    {name: "Toys", link:"/"},
    {name: "Clothes", link:"/"},
    {name: "Snacks", link:"/"},
    {name: "Video Games", link:"/"},
    {name: "Household Supplies", link:"/"},
  ]

  return (
    <>
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
        className={`top-0 right-0 fixed bg-gray-800 w-[23vw] h-full p-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <h2 className='text-2xl text-white'>Categories</h2>
        <ul>
            {Categories.map((category) => (
                <li key={category.name} className="text-gray-300 text-sm">
                    <a href={category.link} className='text-red-800 hover:text-blue-400 duration-500'>{category.name}</a>
                    </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default SideBar;
