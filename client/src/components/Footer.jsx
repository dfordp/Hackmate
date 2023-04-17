import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-component1 grid grid-flow-col justify-center w-full'>
      <AiOutlineCopyright className='text-black text-2xl mt-2 mb-2'/>
      <p className='text-black text-2xl ml-2 mt-1'>2023</p>
      <p className='text-black text-2xl mt-1'>|</p>
      <p className='text-black text-2xl mt-1'>Dilpreet Grover and Kajol Shah</p>
    </div>
  )
}

export default Footer
