import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { registerUser } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#175e5e",
    },
  },
});

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  userType: string;
  email: string;
  password: string;
  username: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    dateOfBirth: yup.string().required("Date of birth is required."),
    userType: yup.string().required("Usertype is required."),
    email: yup.string().email().required("Email is required."),
    username: yup.string().min(6).max(20).required("Username is required."),
    password: yup.string().min(8).required("Password is required."),
  })
  .required();

const Registration = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema) as any,
  });

  const { loading, userToken, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    // Redirect user to login page if registration was successful
    if (success) navigate("/login");
    // Redirect authenticated user to home screen
    if (userToken) navigate("/home");
  }, [navigate, userToken, success]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        className="p-4"
        sx={{
          backgroundColor: "#f4f4f4",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <Typography
              variant="h1"
              className="my-5 display-3 fw-bold ls-tight px-3"
            >
              <span style={{ color: "#175e5e" }}>The best offer</span> <br />
              <span style={{ color: "#a9a965e3" }}>for your career</span>
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
                  <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: "1px", marginBottom: "1px" }}
                  >
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        sx={{ color: "#175e5e", marginBottom: "20px" }}
                      >
                        Register
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="First name"
                        variant="outlined"
                        {...register("firstName")}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Last name"
                        variant="outlined"
                        {...register("lastName")}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Date of Birth"
                        variant="outlined"
                        {...register("dateOfBirth")}
                        error={!!errors.dateOfBirth}
                        helperText={errors.dateOfBirth?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      >
                        <InputLabel id="userTypeLabel">User Type</InputLabel>
                        <Controller
                          control={control}
                          name="userType"
                          render={({ field }) => (
                            <Select
                              labelId="userTypeLabel"
                              label="User Type"
                              {...field}
                            >
                              <MenuItem value="MEMBER">Member</MenuItem>
                              <MenuItem value="COMPANY_OWNER">
                                Company Owner
                              </MenuItem>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        variant="outlined"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Email address"
                        variant="outlined"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                        }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        type="submit"
                        size="medium"
                        variant="contained"
                        sx={{
                          backgroundColor: "#175e5e",
                          color: "#fff",
                          marginTop: "17px",
                          width: "100%",
                          height: "50px",
                        }}
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </Button>
                    </Grid>

                    {/* Add the sign-in link below the form */}
                    <Grid
                      item
                      xs={12}
                      sx={{ textAlign: "center", marginTop: "16px" }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Have an account?{" "}
                        <Link
                          to="/login"
                          style={{ color: "#175e5e", textDecoration: "none" }}
                        >
                          Sign in
                        </Link>
                      </Typography>
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

export default Registration;
