import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <img src='https://t4.ftcdn.net/jpg/04/83/17/69/360_F_483176994_Mvj1b9H2sKpq9T1xzoJy6CreJT7leHBL.jpg'></img>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Gallery</li>
        <li> <Link to="contact">Contact</Link></li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Header