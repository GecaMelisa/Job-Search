import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3e3a4',
    },
  },
});

const userTypes = ['Member', 'Company Owner'];

function Registration() {
  const [formData, setFormData] = React.useState({
    userType: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    address: '',
    education: '',
    workExperience: '',
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name!]: value as string });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className='p-4' sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1200px', margin: 'auto' }}>

        <Grid container spacing={2}>

          <Grid item md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

            <Typography variant='h1' className="my-5 display-3 fw-bold ls-tight px-3">
              <span style={{ color: '#175e5e' }}>The best offer</span> <br />
              <span style={{ color: '#a9a965e3' }}>for your career</span>
            </Typography>

          </Grid>

          <Grid item md={6}>

            <Card className='my-5'>
              <CardContent className='p-5'>

                <Grid container spacing={2} sx={{ marginTop: '1px', marginBottom: '1px' }}>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='First name'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Last name'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Date of Birth'
                      name='dateofBirth'
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Address'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>


                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='Education'
                      name='education'
                      select
                      value={formData.education}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    >
                      {userTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      margin='normal'
                      label='User Type'
                      name='userType'
                      select
                      value={formData.userType}
                      onChange={handleChange}
                      variant='outlined'
                      sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                    >
                      {userTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  </Grid>
                  
                  <Button className='w-100 mb-4' size='medium' variant='contained' sx={{ backgroundColor: '#175e5e', color: '#fff', marginTop: '20px' }}>
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
