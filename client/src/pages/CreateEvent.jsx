import React from 'react'
import { Header,Footer } from '../components'
import {AiOutlineLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Button}  from '@mui/material'

const CreateEvent = () => {
  return (
    <div>
    <Header/>
    <div className='mb-5'>
      <div className='flex flex-col mb-5'>
    <div className='flex flex-row justify-start'>
      <Link to ='/'> 
        <AiOutlineLeft className='mt-2 text-grey-100' />
      </Link>
      <h1 className='pt-1 ml-2'>Back to Home</h1>
      </div>
    </div>
    <div className='pt-2 pl-5 text-2xl font-bold'>
          Create An Event
      </div>
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col gap-2.5 pt-24 pl-10 w-2/5'>
      <div>
        Event Name
      </div>
       <input 
        className="flex text-black h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text" 
        placeholder="Event Name"
       />
      <div>
        Event Type
      </div>
       <input 
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="text" 
        placeholder="Event Type"
  
       />
      <div>
        Event Location
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Location'
        />
      <div>
        Event Duration
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Duration'
        />
        <div>
        Event Date
      </div>
        <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Date'
        />
        <div>
        Event Description
      </div>
        <input
        className="flex h-40 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type='text'
        placeholder='Event Description'
        />
        <div className='flex flex-row justify-center mt-4'>
        <Button variant="contained" color="primary" className='mt-5'>
          Create Event
        </Button>
        </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default CreateEvent
