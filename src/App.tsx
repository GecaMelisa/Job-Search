import { Route, Routes } from "react-router-dom";
import { Registration, Home, Login, NotFound, UserProfile, About } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='root-container'>
      <ToastContainer />
      <div className='w-[95%] m-auto bg'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
          {/* add any other protected routes here */}
          {/* <Route element={<ProtectedRoute />}></Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
