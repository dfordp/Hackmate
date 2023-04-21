import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const AboutEvent = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-row pt-3'>
      <Link to ='/'> 
        <AiOutlineLeft className='mt-2 text-grey-100' />
      </Link>
      <h1 className='pt-1 ml-2'>Back to Home</h1>
      </div>
      <div className='pt-2 pl-5 text-2xl font-bold'>
          About Event
      </div>
    <div className='flex flex-col gap-8 pl-20 pt-10 mb-7'>
      <div>
        <div className='bg-component1 w-80 h-52 rounded-lg'> 
          Event Pic Based on type
        </div>
      </div>
      <div className='bg-component1 w-80 h-52 rounded-lg' >
        Google Map Embed of Event Location
      </div>
      </div>
    </div>
  )
}

export default AboutEvent
