import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState('home')
  const onHomeClick = () => {setActive('home'); navigate('/home')}
  const onEventsClick = () => {setActive('myevents'); navigate('/myevents')}
  const onMessagesClick = () => {setActive('messages'); navigate('/messages')}
  const onProfileClick = () => {setActive('myprofile'); navigate('/myprofile')}
  return (
    <div className='grid grid-flow-col justify-center gap-80 content-stretch font-medium mt-3 mb-3'>
    <button onClick={onHomeClick} >Home</button>
    <button onClick={onEventsClick} >My Events</button>
    <button onClick={onMessagesClick} >Messages</button>
    <button onClick={onProfileClick} >My Profile</button>
    </div>
  )
}

export default Navbar
