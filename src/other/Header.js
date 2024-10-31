import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-semibold'>Hello <br></br><span className='text-3xl font-semibold'> Jani 👋 </span></h1>
    <button className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header