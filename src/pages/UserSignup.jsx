import React,{useState,useRef} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const UserSignup = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic,setProfilePic] = useState("")

  const inputRef = useRef(null)
  function handleImage(e){
    let file = e.target.files[0]
    if(file.size>100000){
      toast.error("Choose less than 100KB")
      return
    }
    let reader = new FileReader()

    reader.onloadend = ()=>{
          setProfilePic(reader.result)
    }
    reader.readAsDataURL(file)

  }
  function signup(e){
    e.preventDefault()
    const user = {name,email,phone,password,profilePic}
    axios.post("http://localhost:3000/users",user)
    .then(()=>{
      toast.success("Signup success")
      setName("")
      setEmail("")
      setPassword("")
      setPhone("")
      setProfilePic("")
      inputRef.current.value=""
    })
    .catch(err=>toast.error("Failed to Register"))
  }
  return (
    <>
      <center><h1>Signup page</h1></center>
      <center>
        <form onSubmit={signup}>
          <input 
          type="text" 
          placeholder='Enter name' 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          /><br />

          <input 
          type="text" 
          placeholder='Enter Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /><br />

          <input 
          type="text" 
          placeholder='Enter Phone number' 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          /><br />

          <input 
          type="text" 
          placeholder='Enter Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          /><br />

          <input 
          type="file" 
          required
          onChange={handleImage}
          ref={inputRef}
          /> <br />

          <button>Signup</button>
        </form>
        </center>

        <center>
          Are you Existing User? <Link to={"/userlogin"}>Login</Link>
        </center>
    </>
  )
}

export default UserSignup