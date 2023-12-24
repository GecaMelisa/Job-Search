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
  justifyContent: 'center', // Centriraj horizontalno
  alignItems: 'center', // Centriraj vertikalno
  flexDirection: 'column', // Postavi na kolonu kako bi elementi bili jedan ispod drugog
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
  margin: '15px 0 4px 0', // Adjusted margin
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
    <div className='search-root-container'>
      <form action="">
        <FormContainer>
          <SearchContainer>
          <FirstDiv>
          <Stack direction="row" spacing={0.2} alignItems="center">
            <BsHouseDoor style={IconStyle} />
            <TextField
              type="text"
              variant="standard"
              fullWidth
              placeholder="Search by company..."
              InputProps={{
                sx: { flex: 1, borderBottom: 'none', padding: '10px' },  // Postavljamo borderBottom na none
              }}
            />
          </Stack>
        </FirstDiv>


            <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '30px', marginTop: '8px' }}>
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

          <ButtonContainer>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#4e66a2',
                borderRadius: '7px',
                color: '#white',
                cursor: 'pointer',
                boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '600px',
                height: '50px',
              }}
            >
              Search
            </Button>
          </ButtonContainer>
        </FormContainer>
      </form>
    </div>
  );
};

export default Search;
