import React from 'react'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Jobs from './components/Jobs'
import Value from './components/Value'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='root-container' >
      <div className='w-[95%] m-auto bg'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
      </div>
    </div>
  )
}

export default App