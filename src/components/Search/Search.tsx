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
  borderRadius: '30px',
  padding: '0.5rem',
  margin: '0 auto',
  marginTop: '5px',
  marginBottom: '70px',
  width: '100%', // Postavljeno na 100%
  maxWidth: '800px',
});

const FirstDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  border: "#4e66a2",
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '3px',
  height: '55px',
  boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
  width: '100%', 
  maxWidth: '320px', 
  marginLeft:'70px',
  marginTop: '15px',
  marginBottom:'4px',
  '&:hover': {
    color: '#4e66a2',
  },
});

const SecondDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  border: "#4e66a2",
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '7px',
  height: '55px',
  boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
  width: '100%', // Postavljeno na 100%
  maxWidth: '320px', // Možeš prilagoditi željenu vrednost
  marginTop: '15px',
  marginBottom:'4px',
  marginLeft: '70px',
  marginRigt: '100px',
  '&:hover': {
    color: '#4e66a2',
  },
});


const ButtonContainer = styled('div')({
  display: 'flex',
  padding: '20px',
  justifyContent: 'flex-end',
  alignItems:'center',
  marginTop: '10px',  
  marginRight: '10px', 
});

const IconStyle = {
  fontSize: '22px',
  color: '#6c757d',
};

const HoverIconStyle = {
  fontSize: '22px',
  color: '#a5a6a6',
  cursor: 'pointer',
  '&:hover': {
    color: '#6c757d',
  },
};


const Search = () => {
  return (
    <SearchDiv>
      <form action="">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <FirstDiv>
            <Stack direction="row" spacing={0.2} alignItems="center">
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

          <SecondDiv>
            <Stack direction="row" spacing={0.2} alignItems="center">
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
          </SecondDiv>

          <ButtonContainer>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#4e66a2',
                borderRadius: '7px',
                color: '#white',
                cursor: 'pointer',
                boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
                width: '600%',
                maxWidth: '600px',
                height: '50px',
                alignItems:'center',
                marginLeft: '60px', 
              }}
            >
              Search
            </Button>
          </ButtonContainer>
        </div>
      </form>

      <Box style={{ display: 'flex', justifyContent: 'space-between',marginLeft:'20px', marginRight: '30px', marginTop: '8px'  }}> 
        <Select defaultValue="Full-Time" style={{ width: '200px', border: '2px solid #4e66a2', color: '#444444', height:'40px'}}>
          <MenuItem value="Full-Time">Full-Time</MenuItem>
          <MenuItem value="Part-Time">Part-Time</MenuItem>
          <MenuItem value="Internship">Internship</MenuItem>
        </Select>

        <Select defaultValue="Junior" style={{ width: '200px', border: '2px solid #4e66a2', color: '#444444',  marginLeft: '30px' , height: '40px'}}>
          <MenuItem value="Junior">Junior</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
          <MenuItem value="Intern">Intern</MenuItem>
        </Select>
      </Box>
    </SearchDiv>
  );
};

export default Search;
