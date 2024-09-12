import { Route, Routes } from "react-router-dom";
import {
  Registration,
  Home,
  Login,
  NotFound,
  UserProfile,
  About,
  Companies,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobTabs from "./components/Tabs";
import ChatBot from "./components/ChatBot/Chatbot";

const App = () => {
  return (
    <div className="root-container">
      <ToastContainer />
      <div className="w-[100%] m-auto bg">
        {/*<JobTabs jobs={[]} />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
          <Route path="/companies" element={<Companies />} />

          {/* add any other protected routes here */}
          {/* <Route element={<ProtectedRoute />}></Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot /> {/* Add ChatBot component here */}
      </div>
    </div>
  );
};

export default App;
