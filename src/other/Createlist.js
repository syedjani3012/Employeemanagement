import React from 'react'

const Createlist = () => {
  return (
    <div className='bg-gray-800 w-full mt-10 h-1/2 flex items-center justify-between'>
        <div>
        <div className='ml-3 py-3'>
        <h3>Task Title</h3>
        <input placeholder='Make a UI design' className='w-64 bg-black outline-none border-2 border-white rounded-lg placeholder:text-white hover:scale-105'></input>
        </div>
        <div className='ml-3'>
        <h3>Date</h3>
        <input type='date' placeholder='dd/mm/yyyy' className='w-full bg-black outline-none border-2 border-white rounded-lg placeholder:text-white hover:scale-105'></input>   
        </div>
        <div className='ml-3 mt-3'>
        <h3>Assign to</h3>
        <input placeholder='employee name' className='w-full bg-black outline-none border-2 border-white rounded-lg placeholder:text-white hover:scale-105'></input>
        </div>
        <div className='ml-3 mt-3'>
        <h3>Category</h3>
        <input placeholder='design,dev, etc..' className='w-full bg-black outline-none border-2 border-white rounded-lg placeholder:text-white hover:scale-105'></input>
        </div>
        </div>
        <div className='mr-10 w-2/5 h-full mt-14'>
        <h3>Description</h3>
        <textarea className='w-full h-2/3 bg-black outline-none border-2 border-white rounded-lg hover:scale-105'></textarea>
        <button className='bg-emerald-500 w-full mt-2 rounded-lg'>Create Task</button>
        </div>
    </div>
  )
}

export default Createlist