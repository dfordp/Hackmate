import React from 'react'
import EventIcon from './elements/EventIcon'

const MyEvents = () => {
  return (
    <div className='ml-2'>
       <div className='pt-5'>
        <div className='font-medium'>
          Upcoming Events
        </div>
        <div className='pt-2'>
          <EventIcon/>
        </div>
      </div>
      <div className='pt-5'>
        <div className='font-medium'>
          Created Events
        </div>
        <div className='pt-2'>
          <EventIcon/>
        </div>
      </div>
      <div className='pt-5'>
        <div className='font-medium'>
          Previous Events
        </div>
        <div className='pt-2'>
          <EventIcon/>
        </div>
      </div>
    </div>
  )
}

export default MyEvents
