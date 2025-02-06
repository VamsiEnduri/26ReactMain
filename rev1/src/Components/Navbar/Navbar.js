import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='nav-left'>
            VamsiMart
        </div>
        <div className='nav-center'>
            <a href=''>Home</a>
            <a href=''>Products</a>
            <a href=''>About</a>
            <a href=''>Contact</a>
        </div>
        <div className='nav-right'>
            <p>Login</p>
            <p>SignUp</p>
        </div>
    </div>
  )
}

export default Navbar