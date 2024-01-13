import { Route, Routes } from "react-router-dom"
import { Registration, Home, Login, NotFound, UserProfile } from "./pages"
import NavBar from "./components/NavBar"


const App = () => {


  return (
    <div className='root-container' >
      <div className='w-[95%] m-auto bg'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/userProfile" element={<UserProfile/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      </div>
    </div>
  )
}

export default App