import React from 'react'
import {RiCalendarEventFill} from 'react-icons/ri'
import {BiTimeFive} from 'react-icons/bi'
import {VscSymbolNamespace} from 'react-icons/vsc'
import { Stack , FormHelperText, Select, MenuItem, Button } from '@mui/material';
import EventIcon from './elements/EventIcon'
import ProfileIcon from './elements/ProfileIcon'
import {Link} from 'react-router-dom'
import GoogleGeolocation from '../hooks/GoogleGeolocation';

const Home = () => {
  return (
    <div className='p-2'>
      <div className='flex flex-row mr-8 ml-8 mb-2 h-60 rounded-md justify-center bg-component1'>
        <div className='flex flex-col justify-center font-semibold text-2xl mr-4'>
          Upcoming Event
        </div>
        <div className='flex flex-col justify-center pt-1 font-light text-base'>
              <ul>
                <li>
                  <VscSymbolNamespace className='inline-block mr-2' />
                  Event Name
                </li>
                <li>
                  <RiCalendarEventFill className='inline-block mr-2' />
                  Event Date
                </li>
                <li>
                  <BiTimeFive className='inline-block mr-2' />
                  Event Duration
                </li>
              </ul>
            </div>
      </div>
      <div className='pt-3'>
        <div className='flex flex-row gap-2 justify-end pr-9'>
             <GoogleGeolocation className='mt-5'/>
                Show 
                <Stack direction="row">
                <FormHelperText>
                <Select 
                 variant='outlined'
                 displayEmpty
                 required
                 intialProps={{'aria-label': 'Without label'}}
                 defaultValue="All">
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Web">Web</MenuItem>
                    <MenuItem value="Android">Android</MenuItem>
                    <MenuItem value="ML">IOS</MenuItem>
                    <MenuItem value="ML">CrossPlatform</MenuItem>
                    <MenuItem value="AI">AI</MenuItem>
                    <MenuItem value="IOT">IOT</MenuItem>
                </Select>
              </FormHelperText>
              </Stack>
              And Within
              <Stack direction="row">
                <FormHelperText>
                <Select 
                 variant='outlined'
                 displayEmpty
                 required
                 intialProps={{'aria-label': 'Without label'}}
                 defaultValue="5">
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="15">15</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                    <MenuItem value="25">25</MenuItem>
                    <MenuItem value="30">30</MenuItem>
                </Select>
              </FormHelperText>
              </Stack>
              km
            </div>
      </div>
      <div className='pt-5'>
        <div className='font-medium'>
          Events Around You
        </div>
        <div className='pt-2'>
          <EventIcon/>
        </div>
      </div>
      <div className='pt-5'>
        <div className='font-medium'>
          Exploring new Events
        </div>
        <div className='pt-2'>
          <EventIcon/>
        </div>
      </div>
      <div className='pt-5'>
        <div className='font-medium'>
          Previously Connected With
        </div>
        <div className='pt-2'>
          <ProfileIcon/>
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
      <div className='grid grid-flow-row justify-center mt-2'> 
        <div className='font-medium'>
          Didn't find what you were looking for?
        </div>
        <div className='mt-2 ml-16'>
        <Link to='/createevent'>
          <Button variant='contained'  >
            Create an Event
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

