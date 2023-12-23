import React from 'react'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Jobs from './components/Jobs'
import Value from './components/Value'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"

import { Registration, Home, Login, NotFound } from "./pages"
const App = () => {
  return (
    <div className='root-container' >
      <div className='w-[95%] m-auto bg'>
      <NavBar/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  )
}

export default App