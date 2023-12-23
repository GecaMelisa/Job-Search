import React from 'react';
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

const theme = createTheme();

function Registration() {
  return (
    <ThemeProvider theme={theme}>
      <Container className='p-4'>

        <Grid container>

          <Grid item md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

            <Typography variant='h1' className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your career</span>
            </Typography>


          </Grid>

          <Grid item md={6}>

            <Card className='my-5'>
              <CardContent className='p-5'>

                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='First name'
                      id='form1'
                      type='text'
                      variant='outlined'
                      className='mb-4'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Last name'
                      id='form1'
                      type='text'
                      variant='outlined'
                      className='mb-4'
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  margin='normal'
                  label='Email'
                  id='form1'
                  type='email'
                  variant='outlined'
                  className='mb-4'
                />
                <TextField
                  fullWidth
                  margin='normal'
                  label='Password'
                  id='form1'
                  type='password'
                  variant='outlined'
                  className='mb-4'
                />

                <Button className='w-100 mb-4' size='medium' variant='contained'>
                  sign up
                </Button>

              </CardContent>
            </Card>

          </Grid>

        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default Registration;
