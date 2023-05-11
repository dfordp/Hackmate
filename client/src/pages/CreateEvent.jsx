import React , {useCallback , useRef , useState} from 'react'
import { Header,Footer } from '../components'
import {AiOutlineLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Button}  from '@mui/material'
import SearchBoxLocation from '../hooks/SearchBoxLocation'
import axios from 'axios'


const CreateEvent = () => {

  const submitForm = async (inputValues) => {
    try {
    const response = await axios.post("http://localhost:8080/api/events/createEvent", inputValues)
    console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  

  const [inputValues, setInputValues] = useState({
    eventName: '',
    eventType: '',
    eventLocation: '',
    eventDuration: '',
    eventDate: '',
    eventDescription: '',
    createdBy: localStorage.getItem('id'),
  });

  const handleChanges = (event, inputName) => {
    setInputValues({ ...inputValues, [inputName]: event.target.value });
  };

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputValues);
  submitForm(inputValues)
}


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
        onChange={(event) => handleChanges(event, 'eventName')}
        placeholder="Event Name"
       />
      <div>
        Event Type
      </div>
       <select
        className="w-full"
        type="text" 
        onChange={(event) => handleChanges(event, 'eventType')}
        placeholder="Event Type"
       >
          <option value="Web">Web</option>
          <option value="Android">Android</option>
          <option value="ML">IOS</option>
          <option value="ML">CrossPlatform</option>
          <option value="AI">AI</option>
          <option value="IOT">IOT</option>
          <option value="Cloud">Cloud</option>
          <option value="Blockchain">Blockchain</option>
          <option value="CyberSecurity">CyberSecurity</option>
          <option value="Other">Other</option>
       </select>
      <div>
        Event Location
      </div>
       <SearchBoxLocation 
        value={inputValues.eventLocation}
        onChange={(event) => handleChanges(event, 'eventLocation')}
       />
       <div>
        Event Duration
      </div>
        <input
        className=""
        type='text'
        onChange={(event) => handleChanges(event, 'eventDuration')}
        placeholder='Event Duration'
        />
        <div>
        Event Date
      </div>
        <input
        className=""
        type='date'
        onChange={(event) => handleChanges(event, 'eventDate')}
        placeholder='Event Date'
        />
        <div>
        Event Description
      </div>
        <input
        className=""
        type='text'
        onChange={(event) => handleChanges(event, 'eventDescription')}
        placeholder='Event Description'
        />
        <div className='flex flex-row justify-center mt-4'>
        <Button onClick={handleSubmit} variant="contained" color="primary" className='mt-5'>
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
