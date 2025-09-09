import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
 
const About = () => {
  return (
  <main className='w-screen bg-[#000000] text-[#c0c0c0]'>
   
     <header className='w-full fixed top-0 z-50 bg-[#000000] '>
       <Navbar/>
      <div className='border-b-2 mx-36 border-white '></div>
     </header>
 
     <section className='w-full  pt-20 '>
      <div className='w-full h-160 px-18  mt-2 relative'>
        <img className='w-full h-full rounded-2xl' src="../src/photos/aboutus.jpg" alt="" />
        <h1 className='absolute bottom-6 text-9xl font-semibold px-12 text-[#ffffff]'>WE ARE INFOTECH</h1>
 
      </div>
     </section>
 
     <section className='w-full flex px-15 pt-25'>
      <div className='w-1/2 text-2xl'>Our Story.</div>
      <div className='w-1/2'>
      <h1 className='font-semibold text-4xl'>
        Building Digital Experiences, Driving Real Growth.
      </h1>
      <h1 className='pt-5 text-2xl font-thin'>At MKN Infotech, we transform ideas into impactful digital solutions, we empower businesses with innovation, scalability, and growth.
We are not just service providers — we are your digital partners, building experiences that inspire trust and deliver results.</h1>
       </div>
     </section>
 
     <section className='px-10 pt-30'>
      <div>
        <h1 className='text-2xl font-semibold'>Our Values.</h1>
        <h1 className='text-4xl font-semibold mt-4'>Principles that guide us</h1>
       
      </div>
      <div>
        <div className='border-t-1 border-gray-600 mt-10 mb-3'></div>
        <div className='flex justify-between w-full ' >
          <h1 className='w-1/3 text-2xl'>Stay curious</h1>
          <h1 className='w-2/3 pr-10 font-thin'>We believe in constant learning and asking better questions. Curiosity drives innovation and helps us adapt, evolve, and stay ahead.</h1>
        </div>
        <div className='border-t-1 border-gray-600 mt-10 mb-3'></div>
        <div className='flex justify-between w-full ' >
          <h1 className='w-1/3 text-2xl'>Build with empathy</h1>
          <h1 className='w-2/3 pr-10 font-thin'>We design and develop with real people in mind. Understanding needs, emotions, and context is key to making meaningful solutions.</h1>
        </div>
        <div className='border-t-1 border-gray-600 mt-10 mb-3'></div>
        <div className='flex justify-between w-full ' >
          <h1 className='w-1/3 text-2xl'>Own the outcome</h1>
          <h1 className='w-2/3 pr-10 font-thin'>We take full responsibility for our work and the impact it creates. Good or bad, we stand by our results and learn from every step.</h1>
 
        </div>
        <div className='border-t-1 border-gray-600 mt-10 mb-3'></div>
      </div>
 
     </section>
 
     <footer className='mt-32 pb-20 bg-[#2A2A2A] pt-20 px-12 text-white'>
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
 
export default About
 
 
