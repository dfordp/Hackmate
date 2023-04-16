import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
