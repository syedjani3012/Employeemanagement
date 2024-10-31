import React from 'react'

function Tasknumbers() {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='bg-red-500 w-[45%] px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-blue-500 w-[45%] px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-green-500 w-[45%] px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-yellow-500 w-[45%] px-9 py-6 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='xl font-semibold'>New Task</h3>
        </div>
    </div>
  )
}

export default Tasknumbers