import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Itservice from '../components/Itservice'

const Services = () => {
  return (
        <main className='w-screen bg-[#000000] text-[#c0c0c0]'>
      <header className='w-full fixed top-0 z-50 bg-[#000000]'>
       <Navbar/>
      <div className='border-b-2 mx-36 border-white '></div>
     </header>
     
 
    <section>
      <div className='text-center'>
        <h1 className='text-3xl font-bold pt-40 text-white'>Our Services</h1>
        <h1 className='px-60 mt-6 '>We offer a wide range of IT services, from website development and cloud solutions to cybersecurity and DevOps automation to help businesses thrive in a digital world.</h1>
      </div>

      <div className='flex flex-wrap gap-12 px-10 mt-20'>

       <Itservice img="../src/photos/coding.jpg" title="Web & Application Development" description="We craft responsive, scalable, and feature-rich websites and applications that meet your business needs. Our team uses cutting-edge technologies like React, Angular, Node.js, and Python to deliver high-performance solutions." feature1="Responsive Web Design" feature2="API Development & Integration" feature3="Custom Web Application Development"  />

      <Itservice img="../src/photos/cloud2.jpg" title="Cloud Solutions" description="Our cloud solutions leverage AWS, Azure, and Google Cloud to offer secure, scalable, and cost-effective solutions. Whether migrating your business to the cloud or optimizing your cloud infrastructure, we provide tailored solutions for your business." feature1="Cloud Migration & Optimization" feature2="AWS, Azure, and GCP Expertise" feature3="Disaster Recovery and Backup Solutions"  />

      <Itservice img="../src/photos/cyber.jpeg" title="Cybersecurity & Compliance" description="We safeguard your business against evolving threats. Our cybersecurity services include risk assessments, vulnerability management, threat monitoring, and compliance to industry standards like GDPR and HIPAA." feature1="Penetration Testing & Risk Analysis" feature2="Compliance Management (GDPR, HIPAA)" feature3="Network Security & Firewalls"  />

      <Itservice img="../src/photos/devops2.png" title="DevOps & Automation" description="Our DevOps practices streamline the software development lifecycle, integrating continuous testing, integration, and delivery to improve collaboration and speed. We automate processes using cutting-edge tools and technologies." feature1="CI/CD Pipeline Setup" feature2="Infrastructure Automation (Terraform, Ansible)" feature3="Containerization (Docker, Kubernetes)"  />

      <Itservice img="../src/photos/servicesupport.jpg" title="IT Infrastructure & Support Services" description="We ensure your IT infrastructure is robust, reliable, and cost-effective. Our managed IT services cover hardware, software, network management, and 24/7 support to keep your business running smoothly." feature1="24/7 IT Support & Helpdesk" feature2="Hardware Procurement & Maintenance" feature3="Cloud Infrastructure Management"  />

      <Itservice img="../src/photos/networking2.jpg" title="Networking & Systems Integration" description="We design and integrate scalable, secure network infrastructures that support your business. Our solutions include network security, virtualization, and systems integration for seamless communication and performance." feature1="Network Architecture Design & Implementation" feature2="Firewall Configuration & Network Security" feature3="VPN & Remote Access Solutions"  />
     


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

export default Services