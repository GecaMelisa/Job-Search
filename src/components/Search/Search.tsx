import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import { AiOutlineSearch} from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsHouseDoor } from 'react-icons/bs';
import './search.css';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const SearchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  flexDirection: 'column', 
});

const FirstDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid #4e66a2',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '3px',
  height: '55px',
  boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '320px',
  margin: '15px 0 4px 0', 
  '&:hover': {
    color: '#4e66a2',
  },
});


const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
});

const IconStyle = {
  fontSize: '22px',
  color: '#175e5e',
};

const HoverIconStyle = {
  fontSize: '22px',
  color: '#175e5e',
  cursor: 'pointer',
  '&:hover': {
    color: '#175e5e',
  },
};

const Search = () => {
  return (
    <div className='search-root-container'>
      <form action="">
        <FormContainer>
          <SearchContainer>
      

            <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '30px'}}>
              <Select defaultValue="Full-Time" style={{ width: '200px', border: '2px solid #4e66a2', height: '40px' }}>
                <MenuItem value="Full-Time">Full-Time</MenuItem>
                <MenuItem value="Part-Time">Part-Time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>

              <Select defaultValue="Junior" style={{ width: '200px', border: '2px solid #4e66a2', marginLeft: '30px', height: '40px' }}>
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
              </Select>
            </Box>

           
          </SearchContainer>

        </FormContainer>
      </form>
    </div>
  );
};

export default Search;
