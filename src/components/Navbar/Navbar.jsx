import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt="Logo" />
        <ul className="nav-menu">
        
            <li>Home</li>
            <li>Categories </li>
            <li>About</li>
            <li>Contact</li> 
        </ul>
        <div className="login">Sign In</div>
        
    </div>
  )
}

export default Navbar