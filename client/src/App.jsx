import React, {useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'


const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
  const User= localStorage.getItem('user') !==undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
  if(!User)
    navigate('/login');
  }, []);

  return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
  )
}

export default App
