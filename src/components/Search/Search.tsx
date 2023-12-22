import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './search.css';


const SearchDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#E8EAF6',
  borderRadius: '10px',
  padding: '3rem',
  margin: '0 40px',
  marginBottom: '50px', 
});

const FirstDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '10px',
  boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '600px',
  margin: '0 35px', 
  '&:hover': {
    color: '#4e66a2',
  },
});

const IconStyle = {
  fontSize: '25px',
  color: '#6c757d',
};

const HoverIconStyle = {
  fontSize: '30px',
  color: '#a5a6a6',
  cursor: 'pointer',
  '&:hover': {
    color: '#007bff',
  },
};


const Search = () => {
  const buttonHeight = '56px'; 
  return (
    <SearchDiv>
      <form action="">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <FirstDiv>
            <Stack direction="row" spacing={2} alignItems="center">
              <AiOutlineSearch style={IconStyle} />
              <TextField
                type="text"
                variant="standard"
                fullWidth
                placeholder="Search Job..."
                InputProps={{
                  sx: { flex: 1, borderBottom: '2px solid #6c757d', padding: '10px' },
                }}
              />
              <AiOutlineCloseCircle style={HoverIconStyle} />
            </Stack>
          </FirstDiv>

          <FirstDiv>
            <Stack direction="row" spacing={2} alignItems="center">
              <BsHouseDoor style={IconStyle} />
              <TextField
                type="text"
                variant="standard"
                fullWidth
                placeholder="Search by company..."
                InputProps={{
                  sx: { flex: 1, borderBottom: '2px solid #6c757d', padding: '10px' },
                }}
              />
              <AiOutlineCloseCircle style={HoverIconStyle} />
            </Stack>
          </FirstDiv>

          <FirstDiv>
            <Stack direction="row" spacing={2} alignItems="center">
              <CiLocationOn  style={IconStyle} />
              <TextField
                type="text"
                variant="standard"
                fullWidth
                placeholder="Search by location..."
                InputProps={{
                  sx: { flex: 1, borderBottom: '2px solid #6c757d', padding: '10px' },
                }}
              />
              <AiOutlineCloseCircle style={HoverIconStyle} />
            </Stack>
          </FirstDiv>

          <Button
            variant="contained"
            style={{
              backgroundColor: '#4e66a2', // blueColor
              borderRadius: '7px',
              color: '#white',
              cursor: 'pointer',
              boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
              width: '60%',
              maxWidth: '600px',
              margin: '0 25px', 
              marginLeft: '70px'
            }}
          >
            Search
          </Button>
        </div>
      </form>

      <div className='flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Type: </label>

          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">FULL-TIME</option>
            <option value="">PART-TIME</option>
            <option value="">INTERNSHIP</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="level" className='text-[#808080] font-semibold'>LEVEL: </label>

          <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">JUNIOR</option>
            <option value="">SENIOR</option>
            <option value="">INTERN</option>
          </select>
        </div>
    </div>

    <span className='text-[#a1a1a1]-cursor-pointer'>Clear All</span>

    </SearchDiv>
  );
};

export default Search;
