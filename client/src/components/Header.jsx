import React from 'react'
import logo from "../../public/hackmate-logo.png"
import {BsMoonFill , BsFillSunFill} from 'react-icons/bs'
import {IoMdAddCircle} from 'react-icons/io'
import UseDarkMode from '../hooks/UseDarkMode' 


const Header = () => {

  const avatar =localStorage.getItem('profilePic')
    return (
    <div className='grid grid-flow-col'>
      <div className='justify-items-start'>
        <img src={logo} width="200px" className='pl-2 pt-2' />
      </div>
      <div className='flex justify-end mr-4'>
        <div>
          <button className='pt-6 w-6 scale-60 text-gray-500 mr-2 ml-2 transition duration-300 ease-in-out hover:text-pink-400  cursor-pointer'>
            <ThemeIcon/>
          </button>
        </div>
        <div className='items-center justify-end'>
          <button className='pt-6 w-5 scale-110 text-gray-500 mr-2 ml-2 transition duration-300 ease-in-out hover:text-pink-400  cursor-pointer'>
            <IoMdAddCircle />
          </button>
        </div>
        <div>
          <img src={avatar} width="35px" className='rounded-full mt-5 ml-2'/>
        </div>
      </div>
    </div>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = UseDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <BsFillSunFill size='24' />
      ) : (
        <BsMoonFill size='24' />
      )}
    </span>
  );
};


export default Header

