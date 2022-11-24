import React from 'react'

export const NavBar = () => {
  let Links =[
    {name: "Home", link:"/"},
    {name: "Contact", link:"/"},
    {name: "Login", link:"/"},
    {name: "Cart", link:"/"},
  ]

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          Apollo<span class="text-blue-400">D</span><span class="text-purple-500">A</span><span class="text-fuchsia-300">E</span>
        </div>
        <ul className='md:flex md:items-center'>
          {
            Links.map((link) =>(
              <li key={link.name} className='md:ml-8 text-xl'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
            <form className="w-full px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
      </div>
    </div>
  )
}