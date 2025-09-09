import React from 'react'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Services from '../pages/Services'
import { Route,Routes } from 'react-router-dom'
import ScrollToTop from '../components/Scrolltotop'

const Mainroutes = () => {
  return (
     <>
     <ScrollToTop/>
    <Routes>

     <Route  path={'/'} element={<Home/>} />
     <Route  path={'/about'} element={<About/>} />
     <Route  path={'/service'} element={<Services/>} />
     <Route  path={'/contact'} element={<Contact/>} />
     
   </Routes>
     </>
 
  )
}

export default Mainroutes