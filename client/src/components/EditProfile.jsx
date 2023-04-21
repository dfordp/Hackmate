import React from 'react'
import { TextField, Button } from '@mui/material'
import {Link} from 'react-router-dom'

const EditProfile = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className='justify-items-start flex flex-col justify-center pt-40 pb-40 pl-40'>
       <div className='w-60 h-60 bg-component1 rounded-full'>
      </div>
      <div className='flex flex-row justify-start pl-20 pt-7 font-medium text-3xl'>
        Name
      </div>
      </div>
      <div className='flex flex-col justify-center pr-40 gap-4'>
      <div className='flex flex-col gap-2 font-medium w-full'>
        <div>
          Instagram 
        </div>
        <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Instagram Handle (optional)'
          required='false'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2 font-medium w-full'>
        <div>
          Twitter 
        </div>
        <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Twitter Handle (optional)'
          required='false'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2 font-medium w-full'>
        <div>
          Github 
        </div>
        <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Github Handle (optional)'
          required='true'
          />
      </div>
      </div>
      <div className='flex flex-col gap-2 font-medium w-full'> 
        <div>
          Profile Description
        </div>
        <div>
        <TextField
          id="standard-basic"
          placeholder='Enter Profile Description (optional)'
          required='false'
          />
      </div>
      </div>
      <div className='flex flex-rows pl-10 pt-5'>
      <Link to='../../myprofile'>
        <Button variant='contained' color='primary'>
          Save Changes
        </Button>
        </Link>  
      </div>
      </div>
    </div>
  )
}

export default EditProfile
