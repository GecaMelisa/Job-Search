import React, { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/authSlice'
//import { useNavigate } from 'react-router-dom';
import { jobList } from '../../constants';
import { Job } from '../../utils/types';


type Props = {}

const NavBar = (props: Props) => {
  const { userToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState<Job[]>([]);

  
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Search Term:', searchTerm);

    const filteredJobs = jobList.filter(job => job.position.toLowerCase().includes(searchTerm));
    console.log('Filtered Jobs:', filteredJobs);

    setJobs(filteredJobs);
  };

  useEffect(() => {
    console.log('Jobs after update:', jobs);
  }, [jobs]);

  return (
    <div className='root-container'>
      <div className='nav-container navBar flex justify-between items-center p-[20.2rem] '>
        <div className="logoDiv">
          <h1 className="logo text-[5px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
         {} 
         <span className="tagline" style={{ 
          marginLeft: '10px',
          marginRight: '500px',
          overflow: 'hidden', 
          display: 'inline-block',
          fontSize: '1.5rem', 
          color: '#e3e3a4e3',  
          fontStyle: 'italic'  
        }}> - The best offer for Your career</span>
         

          <ul className="menu flex gap-10 list-none">
            <li key="jobs" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/home">Home</Link>
            </li>

            <li key="jobs" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/about">About</Link>
            </li>

            {userToken ? (
        <>
          <li key="userProfile" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/userProfile/${id}">MyProfile</Link>
            </li>

          <li key="logout" className='menuList text-[#4e66a2] hover:text-blueColor'>
            <a
              className="nav-link font-bold"
              style={{ color: '#cd6225' }}
              onClick={() => {
                dispatch(logout());
                // navigate('/login'); // Redirekcija na login stranicu nakon odjave
              }}
            >
              Logout
            </a>
          </li>

         
        </>
      ) : (
        <>
          <li key="login" className='menuList text-[#4e66a2] hover:text-blueColor'>
            <Link className="nav-link font-bold" to="/login">Login</Link>
          </li>
          <li key="register" className='menuList text-[#4e66a2] hover:text-blueColor'>
            <Link className="nav-link font-bold" to="/registration">Registration</Link>
          </li>
        </>
      )}
    </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


