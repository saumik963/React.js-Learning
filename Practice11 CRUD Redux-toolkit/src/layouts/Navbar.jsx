import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">BookZone</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/show-books">Book List</Link></li>
        
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
      <Link to="/add-book" className="btn">Add Book</Link>
    </nav>
  )
}

export default Navbar;