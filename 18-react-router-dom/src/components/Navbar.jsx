import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-cyan-800'>
        <h3 className="font-bold text-xl">Nancy</h3>
        <div className='flex items-center gap-8 underline'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/product'>Product</Link>
        </div>
      </div>
  )
}

export default Navbar
