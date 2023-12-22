import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

const SearchDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  padding: '3rem',
  margin: '0 40px',
  marginBottom: '50px', // Dodano donji margin od 50 piksela
});

const FirstDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '600px',
  margin: '0 25px', 
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
        </div>
      </form>
    </SearchDiv>
  );
};

export default Search;
