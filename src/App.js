import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { getlocalstorage, setlocalstorage } from './utils/Localstorage';

function App() {

  const [user,setUser]=useState(null)

  const handlelogin=(email,pass)=>{
    if(email==="jani@tcs.com" && pass==="123"){
      setUser('admin')
    }
    else if(email==="user@me.com" && pass==="123"){
      setUser('user')
    }
    else{
      alert("Invalid credentials");
    }
  }

  return (
   <>
   {!user ? <Login handlelogin={handlelogin}/> : ''}
   {user=='admin' ? <Admin/> : <Employee/>}
   {/* <Employee/> */}
   {/* <Admin/> */}
   </>
  )
}

export default App