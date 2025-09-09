import React from 'react'
import Navbar from '../components/Navbar'
import Abouttemplate from '../components/Abouttemplate'
import Servicetemplateleft from '../components/Servicetemplateleft'
import Servicetemplateright from '../components/Servicetemplateright'

import '../stylesheets/Home.css';

import { NavLink } from 'react-router-dom'
import Scroll from '../components/Scroll'




const Home = () => {
  

  return (

    <main className='w-screen bg-black text-[#c0c0c0]'>

     <header className=' fixed  z-50 top-0  w-full bg-[#000000]'>
        <Navbar />
        
       <div className='border-b-2 mx-36 border-[#595959] '></div>

     </header>

     <section className='w-full px-20 pt-20 mt-1'>
       <div className='w-full   '>
        <img src="../src/photos/bg.jpg" className='w-full rounded-4xl ' alt="" />
       </div>
     </section>

     <section>
      <div className='text-center mt-15'>
        <h1 className='text-3xl font-semibold'>About Us.</h1>

        <div className='flex flex-col'>
        <span className='mt-6 text-3xl  bg-gradient-to-r from-[#c0c0c0] to-amber-300 inline bg-clip-text text-transparent'>Empowering Your </span>
        <span className='text-3xl bg-gradient-to-r from-[#c0c0c0] to-amber-300 inline bg-clip-text text-transparent'> Business with Smart IT Solutions </span>
        </div>

      </div>
       
       <div className=' flex justify-around pt-20 px-20  pb-20'>

       <Abouttemplate num="01" title="Certified IT professionals with 5+ years experience"/>
       <Abouttemplate num="02" title="We provide real-time, scalable support to ensure business continuity"/>
       <Abouttemplate num="03" title="Expert strategic planning and consulting tailored to your business goals."/>
       </div>

     </section>

     <section className='w-full'>
      <div className='text-center pt-20'>
              <h1 className='text-3xl font-semibold' >Our Services</h1>
              <h1 className='text-3xl mt-6 bg-gradient-to-r from-[#c0c0c0] to-amber-300 bg-clip-text text-transparent'>We are dedicated to serve you all time</h1>
      </div>
       

       <div className='pt-26 pb-40 gap-y-28 flex flex-col'>

       <Servicetemplateleft title="Web & Application Development" desc="Custom websites and apps built to power your business and engage your users across all platforms." img="./src/photos/webdev7.jpg"/>

       <Servicetemplateright title="Cloud Solutions" desc="Scalable cloud services to boost flexibility, reduce costs, and support your digital transformation." img="./src/photos/cloud.jpg"/>

       <Servicetemplateleft title="Cybersecurity & Compliance" desc="Protect your data and ensure compliance with tailored security strategies and proactive monitoring." img="./src/photos/cybersecurity2.png"/>

       <Servicetemplateright title="IT Infrastructure & Support Services" desc="Reliable infrastructure and responsive support to keep your systems running smoothly every day." img="./src/photos/support.jpg"/>

       <Servicetemplateleft  title="DevOps & Automation" desc="Accelerate delivery and improve efficiency with smart automation and streamlined DevOps practices." img="./src/photos/devops2.jpg"/>

       <Servicetemplateright title="Networking & Systems Integration" desc="Seamless network solutions and system integrations that connect your entire business securely." img="./src/photos/networking.jpg"/>
       </div>

     </section>


     <section className='w-full h-120 flex gap-x-12 px-20'>

       <div className='w-1/2 h-full  '>
       
       <div className='text-center'>
       <h1 className='text-5xl  text-white mt-24'>Why brands <br /> choose Us.</h1>

       </div>
       <h3 className='text-xl mt-5 pl-24 '>Our commitment to excellence and client satisfaction sets us apart in the IT industry.</h3>

       </div>

       <div className='scroll-container w-1/2 h-full bg-[#c0c0c0]'>
       <div className='scroll-content  flex flex-col gap-y-4'>
       <Scroll title="End-to-end Solutions" desc="From concept to launch, we guide you through every stage via our dedicated team."/>
       <Scroll title="Proven Track Record" desc="With years of industry experience, we’ve delivered reliable tech solutions to global clients."/>
       <Scroll title="Security First" desc="We follow best practices to ensure your data and infrastructure stay secure."/>
       <Scroll title="Innovation Driven" desc="We leverage emerging technologies to give your business a competitive edge."/>
        
    
       </div>
         <div className='scroll-content  flex flex-col gap-y-4 mt-4'>
   <Scroll title="End-to-end Solutions" desc="From concept to launch, we guide you through every stage via our dedicated team."/>
       <Scroll title="Proven Track Record" desc="With years of industry experience, we’ve delivered reliable tech solutions to global clients."/>
       <Scroll title="Security First" desc="We follow best practices to ensure your data and infrastructure stay secure."/>
       <Scroll title="Innovation Driven" desc="We leverage emerging technologies to give your business a competitive edge."/>
        
        </div>
        

       </div>
  
      
     </section>


     <footer className='mt-32 pb-20 bg-[#2A2A2A] pt-20 px-12 text-white'>
      <div className='flex gap-x-12 justify-around '>
        <div className='w-80 '>
          
          <h1 className='text-2xl font-bold'>Mkn-infotech</h1>
          <h1 className='mt-6 text-[#c0c0c0]'>We are a leading IT service company providing innovative technology solutions to help businesses grow and succeed in the digital age.</h1>
          <h3 className='mt-4'>+91 99909 85392</h3>
          <h3 className='mt-2'>admin@mkninfotech.com</h3>
          <h3 className='mt-2'>Noida Sec - 62, Uttar Pradesh India 201309</h3>
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
            <h1 className='mt-6 text-xl '>Book a Call For Free Consultation</h1>
          <h2 className='mt-2 pb-4 text-[#c0c0c0]'>Experienced team delivering exceptional digital solutions tailored to your brand.</h2>
          <NavLink to='/contact' className='bg-white text-black  rounded-md px-2 py-1 font-medium'> Contact Us</NavLink>
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

export default Home