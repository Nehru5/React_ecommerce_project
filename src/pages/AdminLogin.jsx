import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate= useNavigate()

  function adminLogin(e){
    e.preventDefault()
    if(email==="admin@gmail.com" && password==="admin123"){
      toast.success("Login Success")
      navigate("/admindashboard")
    }else{
      toast.error("Invalid credentials")
    }
  }
  return (
    <>
      <center><h1>Admin Login</h1></center>
      <center>
        <form action="" onSubmit={adminLogin}>
        <input 
        type="text" 
        placeholder='Enter Email'  
        required
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        /> <br />
        <input 
        type="text" 
        placeholder='Enter password' 
        required 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        /> <br />

        <button>Login</button>
      </form>
      </center>
    </>
  )
}

export default AdminLogin