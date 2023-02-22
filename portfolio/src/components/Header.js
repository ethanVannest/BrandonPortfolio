import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <h2>Brandon</h2>
      
      <img src='../public/b-solid.svg' alt="B img"></img>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Gallery</li>
        <li> <Link to="/contact">Contact</Link></li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Header