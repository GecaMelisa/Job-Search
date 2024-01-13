import React from 'react';
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a9a965e3',
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Container className='p-4' sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1400px', margin: 'auto' }}>

        <Grid container>

          <Grid item md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

            <Typography variant='h1' className="my-5 display-3 fw-bold ls-tight px-3">
              <span style={{ color: '#175e5e' }}>The best offer</span> <br />
              <span style={{ color: '#a9a965e3' }}>for your career</span>
            </Typography>

          </Grid>

          <Grid item md={6}>

            <Card className='my-5'>
              <CardContent className='p-5'>

                <TextField
                  fullWidth
                  margin='normal'
                  label='Email'
                  id='form1'
                  type='email'
                  variant='outlined'
                  className='mb-4'
                  sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                />
                <TextField
                  fullWidth
                  margin='normal'
                  label='Password'
                  id='form1'
                  type='password'
                  variant='outlined'
                  className='mb-4'
                  sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                />

                <Button className='w-100 mb-4' size='medium' variant='contained' sx={{ backgroundColor: '#175e5e', color: '#fff' }}>
                  sign in
                </Button>

              </CardContent>
            </Card>

          </Grid>

        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default Login;
