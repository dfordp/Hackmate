import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Messages = () => {
  const handleSendClick=()=>{}
  return (
    <div className='bg-component3 ml-5 mr-5 rounded-sm flex flex-row mb-7 h-max'>
        <div className='w-60 justify-start outline-2 outline-black'>
            <div className='font-semibold ml-20 mt-5'>
                Messages
            </div>
            <div class="border-t border-black my-4"></div>
            <div className='-mt-4'>
                <div className='flex flex-row bg-component4 h-16 pl-4 pt-2 mb-4'>
                    <div className='bg-component1 w-10 h-10 rounded-full'>Up</div>
                    <div className='font-medium mt-2 ml-3' >UserName</div>
                </div>
            </div>
           
            <div class="border-t border-black"></div>
            <div className='-mt-4'>
                <div className='flex flex-row bg-component4 h-16 pl-4 pt-2 '>
                    <div className='bg-component1 w-10 h-10 rounded-full'>Up</div>
                    <div className='font-medium mt-2 ml-3' >UserName</div>
                </div>
            </div>
        </div>
        <div className='w-5/6 grid grid-flow-row bg-component3 '>
            <div className='justify-start'>
            <div className='flex flex-row bg-component4 h-16 pl-4 pt-2'>
                    <div className='bg-component1 w-10 h-10 rounded-full'>Up</div>
                    <div className='font-medium mt-2 ml-3' >UserName</div>
            </div>
            </div>
            <div className='justify-end'>
            <form className=' bg-component5 ml-3 mr-3 rounded-full pl-3 pt-2 w-6/7 h-10'>
              Type your message here
              <button onClick={handleSendClick} className='float-right'>
                <AiOutlineSend className='text-2xl mr-3'/>
              </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Messages
