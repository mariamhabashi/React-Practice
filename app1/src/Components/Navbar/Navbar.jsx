import React from 'react'
// Correct - This is a default import for an asset
import logo from '../../assets/logo.png';
import { Link ,NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top">
        <img src={logo} alt="Logo" className='logo'/>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
      </nav>
      
    </>
  )
}
