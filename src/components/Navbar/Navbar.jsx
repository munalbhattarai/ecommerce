import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-right">
        <button className="btn-login">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
