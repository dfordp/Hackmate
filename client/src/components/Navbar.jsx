import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
    <ul className='grid grid-flow-col justify-center gap-80 content-stretch font-medium mt-3 mb-3'>
    <li>
    <Link to ='/'><button>Home</button></Link> 
    </li>
    <li>
    <Link to ='/myevents'><button>My Events</button></Link> 
    </li>
    <li>
    <Link to ='/messages'><button>Messages</button></Link> 
    </li>
    <li>
    <Link to ='/myprofile'><button>My Profile</button></Link> 
    </li>
    </ul>
    </div>
  )
}

export default Navbar
