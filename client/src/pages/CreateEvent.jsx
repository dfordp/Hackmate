import React , {useCallback , useRef , useState} from 'react'
import { Header,Footer } from '../components'
import {AiOutlineLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Button}  from '@mui/material'
import SearchBoxLocation from '../hooks/SearchBoxLocation'
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};


const CreateEvent = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const autocompleteRef = useRef(null);


  const onLoad = useCallback((autocomplete) => {
    autocompleteRef.current = autocomplete;
  }, []);

  const onPlaceChanged = useCallback(() => {
    const place = autocompleteRef.current.getPlace();

    if (place.geometry) {
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      map.setZoom(15);
    }
  }, [map]);

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
      Create Event
      </div>
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col gap-2.5 pt-24 pl-10 w-2/5'>
      <div>
        Event Name
      </div>
       <input 
        className=""
        type="text" 
        placeholder="Event Name"
       />
      <div>
        Event Type
      </div>
       <select
        className=""
        type="text" 
        placeholder="Event Type"
       >
          <option value="Web">Web</option>
          <option value="Android">Android</option>
          <option value="ML">IOS</option>
          <option value="ML">CrossPlatform</option>
          <option value="AI">AI</option>
          <option value="IOT">IOT</option>
       </select>
      <div>
        Event Location
      </div>
      <LoadScript googleMapsApiKey="AIzaSyBqlp-bgGdN5ay3usGAEXLq7E2v4l1Hybs">
        <Autocomplete  onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <SearchBoxLocation />
        </Autocomplete>
      </LoadScript>
      <div>
        Event Duration
      </div>
        <input
        className=""
        type='text'
        placeholder='Event Duration'
        />
        <div>
        Event Date
      </div>
        <input
        className=""
        type='date'
        placeholder='Event Date'
        />
        <div>
        Event Description
      </div>
        <input
        className=""
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
