import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const Contact = () => {

const {register , handleSubmit,reset} = useForm()

const submit=(data)=>{
console.log(data)
 
 axios.post('http://localhost:3000/api/contact',data)
 .then((res)=>{
   console.log(res.data)
   reset()
    
 })
 .catch((err)=>{
  console.log(err)
 })

}


  return (
    <main className='w-screen bg-[#000000] text-[#c0c0c0]'>
      <header className=' w-full fixed  top-0 z-50 bg-[#000000]'>
       <Navbar/>
      <div className='border-b-2 mx-36 border-white '></div>
     </header>

      <section className='w-full h-150 flex gap-x-20 pt-40 px-20'>
      <div className='w-1/2'>
      <div className=' text-5xl font-semibold mt-10'>Contact Us.</div>
      <div className='flex flex-col mt-10 gap-y-3'>
        <div className='flex gap-x-4 items-center'>
          <img src="../src/photos/contactemail.jpg" className='w-6 rounded-md' alt="" />
          <h1>admin@mkninfotech.com</h1>
        </div>
        <div className='flex gap-x-4 items-center'>
          <img src="../src/photos/contactphone.jpg" className='w-6 rounded-md' alt="" />
          <h1>+91 99909 85392</h1>
        </div>
        <div className='flex gap-x-4 items-center'>
          <img src="../src/photos/contactmap.jpg" className='w-6 rounded-md' alt="" />
          <h1>Noida Sector - 62, Uttar Pradesh,
          India 201309</h1>
        </div>
      </div>
       <form onSubmit={handleSubmit(submit)} className='mt-10 flex flex-col gap-y-4'>
      <input type="text" {...register('name')} placeholder='Enter your name' required className='outline-none border-b-1 w-fit' />
      <input type="text" {...register('email')} placeholder='Enter your Email' required className='outline-none border-b-1 w-fit' />
      
      <textarea type="text" {...register('message')} placeholder='Type your message'  className='border-1 px-2 py-1 text-[#c0c0c0] ' rows={8} required style={{resize:'none'}}/> 
      <button type='submit' className='bg-white py-1  text-black font-semibold rounded-md bold text-xl cursor-pointer '>Request a Quote</button>
    </form>
      </div>

      
     
      <div className='w-1/2'> <img className='w-full h-155 rounded-md' src="../src/photos/contact.jpg" alt="" /></div>
     </section>
     


 
     <footer className='mt-80 pb-20 bg-[#2A2A2A] pt-20 px-12 text-white'>
      <div className='flex gap-x-12 justify-around '>
        <div className='w-80 '>
         
          <h1 className='text-2xl font-bold'>Mkn-infotech</h1>
          <h1 className='mt-6 text-[#c0c0c0]'>We are a leading IT service company providing innovative technology solutions to help businesses grow and succeed <br />
              in the digital age.</h1>
          <h3 className='mt-4'>+91 99909 85392</h3>
          <h3 className='mt-2'>admin@mkninfotech.com</h3>
          <h3 className='mt-2'>Noida Sector - 62, Uttar Pradesh,<br /> India 201309</h3>
          <div>
 
          </div>
         
          </div>
 
        <div className='flex flex-col w-60 pl-8 gap-y-2 '>
     <h1 className='text-2xl font-bold pb-4'>Our Services</h1>  
      <NavLink to="/service" className="hover:text-blue-400">UI/UX Design</NavLink>
      <NavLink to="/service" className="hover:text-blue-400">Web Development</NavLink>
      <NavLink to="/service" className="hover:text-blue-400">Mobile Apps</NavLink>
      <NavLink to="/service" className="hover:text-blue-400">Cloud Solutions</NavLink>
      <NavLink to="/service" className="hover:text-blue-400">IT Consulting</NavLink>
      <NavLink to="/service" className="hover:text-blue-400">Digital Marketing</NavLink>
    </div>
 
        <div className='flex flex-col w-60 pl-8 gap-y-2 '>
          <h1 className='text-2xl font-bold pb-4'>Quick Links</h1>
          <NavLink to="/about" className="hover:text-blue-400">About us</NavLink>
          <NavLink to='/contact' className="hover:text-blue-400">Contact</NavLink>
          <NavLink to="/service" className="hover:text-blue-400"> Service</NavLink>
          <NavLink to="/" className="hover:text-blue-400">Privacy Policy</NavLink>
        </div>
 
        <div className='w-84 '>
          <h1 className='text-2xl font-bold'>Contact</h1>
          <div>
            <h1 className='mt-6 text-xl '>Book a Free Consultation Call</h1>
          <h2 className='mt-2 pb-4 text-[#c0c0c0]'>Experienced team delivering exceptional digital solutions tailored to your brand.</h2>
          <NavLink to='/contact' className='bg-white text-black  rounded-md px-2 py-1 font-medium duration-500 hover:scale-150  hover:bg-[#90cee2]'> Contact Us</NavLink>
          <h1 className='mt-4 '>Our Social Handles</h1>
          <div className='flex gap-x-4 mt-1'>
            <img  src="../src/photos/instagram.png" alt="inst" className='w-10' />
            <img src="../src/photos/twitter.png" alt="" className='w-10' />
            <img src="../src/photos/linkedin.png" alt="" className='w-10' />
          </div>
          </div>
        </div>
 
      </div>
     </footer>
 
      </main>
  )
}

export default Contact