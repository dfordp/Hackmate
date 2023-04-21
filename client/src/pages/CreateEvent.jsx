import React,{useState} from 'react'
import { Header,Footer } from '../components'
import {AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TextField,Button, MenuItem } from '@mui/material'

const typesOfEvent=[
  {
    value:'Web'
  },
  {
    value:'Mobile'
  },
  {
    value:'AI'
  },
  {
    value:'IOT'
  },
]
const CreateEvent = () => {
  const [event, setEvent] = React.useState('none');
  const handleChange = (event) => {
    setEvent(event.target.value);
  };
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
      <div className='grid grid-flow-row justify-center mt-10 scale-105 gap-5 mb-7'>
      <div className='flex flex-col gap-2'> 
      <div className='font-medium'>
        Name of Event
      </div>
      <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Name of the event'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2'>
      <div className='font-medium'>
        Event Type
      </div>
      <div>
        <TextField
          id="standard-basic"
          select
          value={event}
          onChange={handleChange}
          helperText="Select Event Type"
          >
          {typesOfEvent.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
          </TextField>
      </div>
      </div>
      <div className='flex flex-col gap-2'>
      <div className='font-medium'>
        Event Location
      </div>
      <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Location of Event'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2'>
      <div className='font-medium'>
        Event Duration
      </div>
      <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Event Duration'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2'>
      <div className='font-medium'>
        Event Date
      </div>
      <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Date of Event'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2'>
      <div className='font-medium'>
        Event Description
      </div>
      <div >
        <TextField
          id="standard-basic"
          placeholder='Enter Event Description (optional)'
          required='false'
          />
      </div>
      </div>
      <div className='flex flex-row justify-center'>
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