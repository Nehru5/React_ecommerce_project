import React from 'react'
import Homepage from './pages/Homepage'
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from './pages/AdminDashboard'
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes> 
    </>
  )
}

export default App