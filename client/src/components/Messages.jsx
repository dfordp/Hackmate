import React,{useState,useEffect} from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import socket from '../apis-used/socketClient'

const Messages = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])
  
  
  const sendMessage = (event) => {
    event.preventDefault()
    if(message){
      console.log(message)
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  };

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
            {/* <div className=' flex flex-row bg-component5 mr-4 rounded-full h-8'> */}
            <div>
              {messages.map((message, i) => (
                <div key={i}>{message.text}</div>
              ))}
            </div>
            <div className=' flex flex-row bg-component5 mr-4 rounded-full h-8'>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message..."
              className='bg-component5 w-5/6 h-8 rounded-full outline-none pl-3 mr-36'
            />
            <button
              onClick={(event) => sendMessage(event)}
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
