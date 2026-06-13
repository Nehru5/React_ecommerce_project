import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserDashboard = () => {
  let navigate = useNavigate()
  function logout(){
    localStorage.clear()
    navigate("/userlogin")
    toast.success("Logout Done...")
  }
  return (
    <>
      <center><h1>Welcome to Dashboard</h1></center>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default UserDashboard