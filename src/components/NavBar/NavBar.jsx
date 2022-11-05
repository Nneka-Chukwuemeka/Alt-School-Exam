import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <NavLink to='/' className="logo"> <i className="github icon big"> </i> 
          Nneka
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink className="nav" to='/Portfolio'> Portfolio </NavLink>
        <NavLink className="nav" to='/Repos'> Repos </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;