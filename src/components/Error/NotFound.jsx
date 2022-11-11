import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom'


function NotFound() {
  return (
    <div className='notfound'>
      <h3> 404 Error Page Not Found</h3>
        <NavLink to='/' className="not-found-link">
          go back to Home
        </NavLink>
    </div>
  )
}

export default NotFound