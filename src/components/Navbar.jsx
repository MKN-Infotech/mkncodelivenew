import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center space-around justify-around pt-6 text-[#c0c0c0] backdrop-blur-3xl '>
        <div className='w-14 '><img className='w-full' src="../src/photos/mknlogo2.png" alt="" /></div>
        <div className='flex gap-x-4'>
            <NavLink   to="/">Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="bg-white text-black px-2 py-1 font-medium rounded-xl ">Get in Touch</NavLink>
        </div>
    </div>
  )
}

export default Navbar