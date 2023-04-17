import React,{useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Header,Footer, Navbar,Home,Messages,MyEvents,MyProfile } from '../components/Index'

const Main = () => {
  return (
    <div className='grid grid-flow-row bg-lightModeWhite'>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes> 
      <Footer className='justify-items-end' />
    </div>
  )
}

export default Main
