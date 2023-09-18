import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
      <Link to= "" className=''>Home</Link>
      <Link to= "/contact" className=''>Contact us</Link>
      <Link to= "/Hero" className=''>Hero</Link>
      <Link to= "/SignIn" className=''>Sign in</Link>
      <Link to= "/Signup" className=''>Sign Up</Link>
      <Link to= "/" className=''>Sign in</Link>


      </nav>
      
    </div>
  )
}

export default Navbar