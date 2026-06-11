import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Logo</h2>
        </div>
        <div className="right">
          <Link to={"/adminlogin"}><h2>ADMIN</h2></Link>
          <h2>USER</h2>
        </div>
      </div>
    </>
  )
}

export default Navbar