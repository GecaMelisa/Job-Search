import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsHouseDoor } from 'react-icons/bs';
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
  border: "#4e66a2",
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

      <Box style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '30px'  }}> 
        <Select defaultValue="Full-Time" style={{ width: '200px', border: '2px solid #4e66a2', color: '#444444' ,  marginRight: '30px'}}>
        <MenuItem value="Full-Time">Full-Time</MenuItem>
        <MenuItem value="Part-Time">Part-Time</MenuItem>
        <MenuItem value="Internship">Internship</MenuItem>
      </Select>

      <Select defaultValue="Junior" style={{ width: '200px', border: '2px solid #4e66a2', color: '#444444',  marginLeft: '30px' }}>
        <MenuItem value="Junior">Junior</MenuItem>
        <MenuItem value="Senior">Senior</MenuItem>
        <MenuItem value="Intern">Intern</MenuItem>
      </Select>
    </Box>
    </SearchDiv>
  );
};

export default Search;
