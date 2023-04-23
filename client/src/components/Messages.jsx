import React,{useState} from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Messages = () => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='bg-component3 ml-5 mr-5 rounded-sm flex flex-row mb-7 h-max'>
        <div className='w-60 justify-start outline-2 outline-black'>
            <div className='font-semibold ml-20 mt-5 h-7.5'>
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
            <div class="border-t -mt-4 border-black"></div>
            <div className='justify-end bg-component1 pl-5 pt-12'>
            <div className=' flex flex-row bg-component5 mr-4 rounded-full h-8'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className='bg-component5 w-5/6 h-8 rounded-full outline-none pl-3 mr-36'
            />
            <button
              onClick={() => console.log(inputValue)}
              className='justify-end scale-125'
            >
              <AiOutlineSend />
            </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Messages
