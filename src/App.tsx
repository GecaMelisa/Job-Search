import { Route, Routes } from "react-router-dom"
import { Registration, Home, Login, NotFound } from "./pages"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Jobs from "./components/Jobs"

const App = () => {
  return (
    <div className='root-container' >
      <div className='w-[95%] m-auto bg'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  )
}

export default App