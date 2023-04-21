import React from 'react'
import {useNavigate} from 'react-router-dom'

const EventIcon = () => {
  const navigate = useNavigate()
  
  const navigateToEvent = () => {
    navigate('/aboutevent')
  } 

  return (
    <div onClick={navigateToEvent} className=' flex flex-col bg-component1 w-64 h-52 rounded-lg'>
      <div className='bg-component2 rounded-b-none rounded-t-lg h-20'>
        Image
      </div>
      <div className='flex flex-col gap-2 pt-2 pl-1.5 '>
        <div className='font-bold text-base'>
          Event Name
        </div>
        <div className='font-medium text-xs'>
          Event Date (and Duration)
        </div>
        <div className='font-medium text-xs'>
          Event Location ( _ km away from you)
        </div>
        <div className='font-medium text-xs'>
          Event Description
        </div>
      </div>
    </div>
  )
}

export default EventIcon
