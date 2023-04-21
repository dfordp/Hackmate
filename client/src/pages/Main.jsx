import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Header,Footer, Navbar, Home,MyEvents,Messages,MyProfile,EditProfile } from '../components'

const Main = () => {
  
  return (
    <div className='grid grid-flow-row bg-lightModeWhite'>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myprofile/editprofile" element={<EditProfile/>}/>
        </Routes> 
      </div>
      <Footer className='justify-items-end' />
    </div>
  )
}

export default Main
