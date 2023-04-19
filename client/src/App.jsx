import React, { useEffect } from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'
import CreateEvent from './pages/CreateEvent'

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const User =localStorage.getItem('name') !== undefined ? localStorage.getItem('name') : localStorage.clear();

    if (User) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Main />} />
      <Route path="/createevent" element={<CreateEvent />} />
    </Routes>
  )
}

export default App
