import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='nav'>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <br />
        <NavLink to="/about" className='nav-link'>About</NavLink>
        <br />
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
        <NavLink to="/user" className='nav-link'>User</NavLink>
    </nav>
    // <nav className='nav'>
    //     <Link to="/" className='nav-link'>Home</Link>
    //     <br />
    //     <Link to="/about" className='nav-link'>About</Link>
    //     <br />
    //     <Link to="/contact" className='nav-link'>Contact</Link>
    // </nav>
  )
}
