import React from 'react'
import {BsGithub , BsInstagram,BsTwitter,BsPencilFill} from 'react-icons/bs'
import {Link, Routes ,Route, useNavigate} from 'react-router-dom'
import EventIcon from './elements/EventIcon'


const MyProfile = () => {
  return (
    <div className='-space-z-50 mt-2'>
      <div className='flex flex-col'>
        <div className='bg-component2 h-60 rounded-md  ml-7 mr-7 relative '>
          Bg image
        </div>
        <div className='flex flex-row justify-center z-10'>
        <div className='bg-component1 w-40 h-40 rounded-full -mt-20'>
          <img src="" className="w-40 h-40 object-contain rounded-full"/>
        </div>
        </div>
        <div className='flex flex-row gap-2 justify-center scale-75 mt-2'>
        <Link>
           <button>
              <BsInstagram className='text-4xl text-black'/>
           </button>
        </Link>
        <Link>
           <button>
              <BsTwitter className='text-4xl text-black'/>
           </button>
        </Link>
        <Link> 
            <button>
              <BsGithub className='text-4xl text-black'/>
            </button>
        </Link>
        </div>
        </div>   
        <div className='grid grid-flow-row justify-center'>
        <div className='mb-3'> 
        <Link to='./editprofile'>
        <button className='flex flex-row bg-component1 rounded-full pr-2 scale-90'>
          <BsPencilFill className='text-black ml-2 mr-2 mt-1 scale-85'/>
           Edit Profile
        </button>
        </Link>
        </div> 
        <div className='flex flex-row bg-component1 w-full rounded-md mb-2 pl-3 pr-3 '>
        Profile About
        </div>
        </div>
        <div className='ml-2 mb-2'>
          <div className='font-medium mb-2'>
            Recent Events
          </div>
          <EventIcon/>
        </div>
        <div className='ml-2 mb-2'>
          <div className='font-medium mb-2'>
            Created Events
          </div>
          <EventIcon/>
        </div>
        <div className='ml-2 mb-2'>
          <div className='font-medium mb-2'>
            Interested In
          </div>
          <EventIcon/>
        </div>
    </div>
  )
}

export default MyProfile 