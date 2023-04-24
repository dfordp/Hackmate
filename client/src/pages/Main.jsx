import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Header,Footer, Navbar, Home,MyEvents,Messages,MyProfile,EditProfile } from '../components'
import AboutEvent from './AboutEvent'

const Main = () => {
  
  return (
    <div className='grid grid-flow-row bg-lightModeWhite font-sans-Inter '>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myprofile/editprofile" element={<EditProfile/>}/>
          <Route path='/aboutevent' element={<AboutEvent/>}/>
        </Routes> 
      </div>
      <Footer className='justify-items-end' />
    </div>
  )
}

export default Main
