import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <Link to='/' className="brand-logo nav">Super Simple Stock Market</Link>
      </div>
    </nav>
  )
}

export default Navbar