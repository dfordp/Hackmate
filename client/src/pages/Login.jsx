import React from 'react'
import logo from '../../public/hackmate-logo.png'
import { useNavigate } from 'react-router-dom'
import video from '../../public/pexels-fauxels-3255275-3840x2160-25fps.mp4'
import {BsGoogle,BsGithub} from 'react-icons/bs'
import { Button } from '@mui/material'
import { signInWithGoogle,signInWithGithub } from '../apis-used/firebaseClient.js'


const Login = () => {   
  const navigate = useNavigate()
  // const navigateTohome = () => {
  //   navigate('/home')
  // }
  // const handleGoogleClick = () => {
  //   signInWithGoogle()
  //   navigateTohome()
  // }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
      <video
          src={video}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
         <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 rounded-x bg-blackOverlay ">
         <div className="p-5">
            <img src={logo} width="600px" />
          </div>
          <div className="shadow-2xl bg-googleRed mb-4 w-30 h-15 rounded-md pr-2">
            <Button onClick={signInWithGoogle} >
              <BsGoogle className="mr-2 ml-1 flex flex-row justify-center items-center saturate-0 brightness-200" />
              <span className='text-white '>Sign In With Google</span>
            </Button>
          </div>
          <div className="shadow-2xl bg-githubBlack mb-2 w-19 h-15 rounded-md pr-3">
            <Button onClick={signInWithGithub}>
              <BsGithub className="scale-110 mr-3 ml-1 flex flex-row justify-center items-center saturate-0 brightness-200" />
              <span className='text-white '>Sign In With Github</span>
            </Button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Login
