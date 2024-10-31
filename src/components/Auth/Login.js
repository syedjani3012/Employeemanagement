import React, { useState } from 'react'

function Login({handlelogin}) {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('')

  const  submithandler=(e)=>{
    e.preventDefault()
    handlelogin(email,pass)
    setemail('')
    setpass('')
  }


  return (
    <div className='flex bg-gradient-to-b from-gray-500 via-slate-800 to-black h-screen w-screen items-center justify-center'>
        <div className='border-emerald-500 border-2 p-20'>
        <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-col'>
        <input value={email} type='email' className='px-12 py-3 rounded-full  border-2 border-emerald-500 bg-transparent placeholder:text-gray-300 outline-none hover:scale-105' placeholder='enter your email' onChange={(e)=>(setemail(e.target.value))}></input>
        <input value={pass} type="password" className='px-12 py-3 rounded-full mt-3 border-2 border-emerald-500 bg-transparent placeholder:text-gray-300 outline-none hover:scale-105' placeholder='enter your password' onChange={(e)=>(setpass(e.target.value))}></input>
        <button className='bg-emerald-700 text-white border-2 border-emerald-500 mt-5 w-full rounded-full text-xl px-2 py-3 outline-none'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login