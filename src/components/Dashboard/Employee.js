import React from 'react'
import Header from '../../other/Header'
import Tasknumbers from '../../other/Tasknumbers'
import Tasklist from '../Tasklist/Tasklist'

const Employee = () => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
    <Header/>
    <Tasknumbers/>
    <Tasklist/>
    </div>
  )
}

export default Employee