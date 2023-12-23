import React from 'react';
import './navbar.css';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'



const FirstDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #4e66a2', 
  borderRadius: '15px',
  backgroundColor: '#fff',
  padding: '8px',
  boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '1300px', 
  borderBottom: '2px solid #6c757d', 
  marginLeft: '35px',
  marginRight: '35px',
  '&:hover': {
    color: '#4e66a2',
  },
});

const IconStyle = {
  fontSize: '55px',
  color: '#6c757d',
};

const HoverIconStyle = {
  fontSize: '55px',
  color: '#a5a6a6',
  cursor: 'pointer',
  '&:hover': {
    color: '#007bff',
  },
};

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className='root-container'>
      <Link className="nav-link" to="/">Job Search Platform</Link>

      <div className='nav-container navBar flex justify-between items-center p-[3rem] '> 
        <div className="logoDiv"> 
          <h1 className="logo text-[35px] text-blueColor"> 
            <strong>Job</strong>Search 
          </h1> 
        </div> 

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <FirstDiv>
          <Stack direction="row" spacing={40} alignItems="center" sx={{ margin: '0 5px' }}>
              <AiOutlineSearch style={IconStyle} />
              <TextField
                type="text"
                variant="standard"
                fullWidth
                placeholder="Search Job..."
                InputProps={{
                  sx: { flex: 10, padding: '10px' },
                }}
              />
              <AiOutlineCloseCircle style={HoverIconStyle} />
            </Stack>
          </FirstDiv>

        <ul className="menu flex gap-8 list-none"> 
          <li key="jobs" className='menuList text-[#6f6f6f] hover:text-blueColor'>
            <Link className="nav-link" to="/home">Home</Link>
          </li> 

          <li key="login" className='menuList text-[#6f6f6f] hover:text-blueColor'>
            <Link className="nav-link" to="/login">Login</Link>
          </li> 

          <li key="register" className='menuList text-[#6f6f6f] hover:text-blueColor'>
          <Link className="nav-link" to="/registration">Registration</Link>
          </li> 

        </ul> 
      </div> 
    </div>
    </div>
  );
};

export default NavBar;
