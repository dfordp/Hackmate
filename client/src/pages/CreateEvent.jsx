import React from 'react'
import { Header,Footer } from '../components'
import {AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TextField,Button } from '@mui/material'

const CreateEvent = () => {
  return (
  <div className='grid grid-flow-row'>
   <Header className='justify-start'/>
    <div>
      <div className='flex flex-row pt-3'>
      <Link to ='/'> 
        <AiOutlineLeft className='mt-2 text-grey-100' />
      </Link>
      <h1 className='pt-1 ml-2'>Back to Home</h1>
      </div>
      <div className='pt-2 pl-5 text-2xl font-bold'>
          Create an Event
      </div>
      <div className='grid grid-flow-row justify-center mt-10 scale-105 gap-5'>
        <div>
          <TextField
            id='outlined-basic'
            label='Name of Event' 
            variant='outlined'
          />
      </div>
      <div>
          <TextField  
            id='outlined-basic'
            label='Event Type'
            variant='outlined'    
          />
      </div>  
      <div>
          <TextField
            id='outlined-basic'
            label='Event Location'  
            variant='outlined'
          />
      </div>
      <div>
          <TextField
            id='outlined-basic'
            label='Event Date'
            variant='outlined'
          />
      </div>
      <div>
          <TextField
            id='outlined-basic'
            label='Event Duration'
            variant='outlined'
          />
    </div>
    <div>
          <TextField
            id='outlined-basic' 
            label='Event Description'
            variant='outlined'
          />
    </div>
    <div className='flex flex-row justify-center mb-5'>
        <Button variant='contained' color='primary'>
          Create Event
        </Button>
    </div>
  </div>
  <Footer/>
  </div>
  </div>
  )
}

export default CreateEvent