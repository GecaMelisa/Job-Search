import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { login } from '../store/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a9a965e3',
    },
  },
});

type Props = {};

export type LoginFormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const { loading, userToken, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        className="p-4"
        sx={{
          backgroundColor: '#f4f4f4',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} className="text-center text-md-start d-flex flex-column justify-content-center">
            <Typography variant="h1" className="my-5 display-3 fw-bold ls-tight px-3">
              <span style={{ color: '#175e5e' }}>The best offer</span> <br />
              <span style={{ color: '#a9a965e3' }}>for your career</span>
            </Typography>
          </Grid>

          {error && (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Unable to render data!</h4>
              <p>{error}</p>
              <hr />
              <p className="mb-0">Something went wrong, please try again.</p>
            </div>
          )}

          <Grid item md={6}>
            <Card className="my-5">
              <CardContent className="p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2} sx={{ marginTop: '1px', marginBottom: '1px' }}>
                    <Grid item xs={12}>
                      <Typography variant="h4" sx={{ color: '#175e5e', marginBottom: '20px' }}>
                        Login
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        variant="outlined"
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{ '& label': { color: '#175e5e' }, '& fieldset': { borderColor: '#175e5e' } }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        type="submit"
                        size="medium"
                        variant="contained"
                        sx={{ backgroundColor: '#175e5e', color: '#fff', marginTop: '17px', width: '100%', height: '50px' }}
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
