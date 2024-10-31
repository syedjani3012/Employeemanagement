import React from 'react'
import Header from '../../other/Header'
import Createlist from '../../other/Createlist'
import Alltask from '../../other/Alltask'

const Admin = () => {
  return (
    <div className='h-screen w-full p-10'>
    <Header/>
    <Createlist/>
    <Alltask/>
    </div>
  )
}

export default Admin