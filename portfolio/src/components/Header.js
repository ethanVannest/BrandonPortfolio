import React from 'react'
import { Link } from 'react-router-dom'
// import index from '../sr'
const Header = () => {
  return (
    <div>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-stone-300 md:text-5xl lg:text-6xl dark:text-stone-300'>BRANDON VANNEST</h1>
      
      <ul className='text-stone-600'>
        <li><Link to="/">Home</Link></li>
        <li>Gallery</li>
        <li> <Link to="/contact">Contact</Link></li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Header