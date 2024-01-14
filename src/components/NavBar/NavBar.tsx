import React, { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/authSlice'
//import { useNavigate } from 'react-router-dom';


type Props = {}

const NavBar = (props: Props) => {

  const { userToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  //const navigate = useNavigate();


  return (
    <div className='root-container'>
      <div className='nav-container navBar flex justify-between items-center p-[3.2rem] '>
        <div className="logoDiv">
          <h1 className="logo text-[35px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
          <div className='search-bar' style={{ marginLeft: '30px', marginRight: '1px', borderRadius: '15px' }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">&nbsp;</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start"><AiOutlineSearch /></InputAdornment>}
                placeholder="Search for Job..."
                sx={{
                  borderRadius: '8px',
                  border: '1px solid ',
                  backgroundColor: '#edede0e3',
                  '&:hover': {
                    color: '#175e5e',
                  },
                }}
              />
            </FormControl>
          </div>

          <ul className="menu flex gap-8 list-none">
            <li key="jobs" className='menuList text-[#4e66a2] hover:text-blueColor'>
              <Link className="nav-link font-bold" to="/home">Home</Link>
            </li>

            {userToken ? (
            <>
            <li key="userProfile" className='menuList text-[#4e66a2] hover:text-blueColor'>
                <Link className="nav-link font-bold" to="/userProfile">MyProfile</Link>
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