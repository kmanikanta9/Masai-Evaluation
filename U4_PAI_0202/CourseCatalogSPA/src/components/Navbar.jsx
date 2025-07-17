import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border m-10 gap-1 justify-evenly rounded-2xl shadow-amber-50 bg-gray-300'>
      <Link className='p-2 bg-amber-300 rounded-2xl' to="/">Home</Link>
      <Link  className='p-2 bg-green-300 rounded-2xl' to="/products">Products</Link>
      <Link className='p-2 bg-red-300 rounded-2xl' to="/fetchproduct">Products State</Link>
      <Link  className='p-2 bg-blue-400 rounded-2xl' to="about">About</Link>
    </div>
  )
}

export default Navbar
