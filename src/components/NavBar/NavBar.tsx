import React from 'react';
import './navbar.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className='root-container'>
      <div className='nav-container navBar flex justify-between items-center p-[3rem] '> 
        <div className="logoDiv"> 
          <h1 className="logo text-[35px] text-blueColor"> 
            <strong>Job</strong>Search 
          </h1> 
        </div> 

        <ul className="menu flex gap-8 list-none"> 
          <li key="jobs" className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li> 
          <li key="companies" className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li> 
          <li key="about" className='menuList text-[#6f6f6f] hover:text-blueColor'>About Us</li> 
          <li key="login" className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li> 
          <li key="register" className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li> 
        </ul> 
      </div> 
    </div>
  );
};

export default NavBar;
