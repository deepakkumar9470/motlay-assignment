import React from 'react'

import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            
            <div className="logo"><Link className='link' to="/">deepakbooking</Link></div>

            <div className="navItems">
                <div className="navButton">Register</div>
                <div className="navButton">Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar