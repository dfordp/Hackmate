import React,{useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Header,Footer, Navbar, Home,MyEvents,Messages,MyProfile } from '../components'

const Main = () => {
  return (
    <div className='grid grid-flow-row bg-lightModeWhite'>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes> 
      </div>
      <Footer className='justify-items-end' />
    </div>
  )
}

export default Main
