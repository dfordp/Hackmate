import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Button}  from '@mui/material'

const AboutEvent = () => {
  return (
    <div className='flex flex-row gap-32 mb-5'>
    <div className='grid grid-flow-row'>
    <div className='flex flex-row justify-start pt-3 '>
      <Link to ='/'> 
        <AiOutlineLeft className='mt-2 text-grey-100' />
      </Link>
      <h1 className='pt-1 ml-2'>Back to Home</h1>
      </div>
      <div className='pt-2 pl-5 text-2xl font-bold'>
          About Event
      </div>
    <div className='flex flex-col gap-8 pl-24 pt-10 mb-7'>
      <div>
        <div className='bg-component1 w-96 h-64 rounded-lg'> 
          Event Pic Based on type
        </div>
      </div>
      <div className='bg-component1 w-96 h-64 rounded-lg' >
        Google Map Embed of Event Location
      </div>
      </div>
      <div>
      </div>
    </div>
    <div className='flex flex-col gap-2.5 pt-24 pl-10 w-2/5'>
      <div>
        Event Name
      </div>
       <input 
        className="flex text-black h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text" 
        placeholder="Event Name"
        disabled 
       />
      <div>
        Event Type
      </div>
       <input 
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text" 
        placeholder="Event Type"
        disabled 
       />
      <div>
        Event Location
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Location'
        disabled
        />
      <div>
        Event Duration
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Duration'
        disabled
        />
        <div>
        Event Date
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Date'
        disabled
        />
        <div>
        Event Description
      </div>
        <input
        className="flex h-40 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Description'
        disabled
        />
        <div className='flex flex-row justify-center mt-4'>
        <Button variant="contained" color="primary" className='mt-5'>
          I am Interested
        </Button>
        </div>
    </div>
    </div>
  )
}

export default AboutEvent
