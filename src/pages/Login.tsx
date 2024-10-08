import { useForm } from "react-hook-form";
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
  Box,
  styled,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { login } from "../store/authSlice";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import BackgroundImage from "../utils/backk.jpg"; // Import your background image

const BackgroundBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(3.5px)", // Efekat zamagljenja
  zIndex: -1, // Da bi pozadinska slika bila iza sadržaja
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#a9a965e3",
    },
  },
});

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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const { loading, userToken, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/home");
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
          backgroundColor: "#f4f4f4",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "auto",
          position: "relative",
        }}
      >
        <BackgroundBox />
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
                        Login
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{
                          "& label": { color: "#175e5e" },
                          "& fieldset": { borderColor: "#175e5e" },
                          borderRadius: "8px", // Dodajte ovu liniju za zaobljene ivice
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
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
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
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

                    <Grid item xs={12} className="text-center mt-3">
                      <Typography variant="body1">
                        Don't have an account?{" "}
                        <Button
                          component={Link}
                          to="/registration"
                          sx={{
                            textTransform: "none",
                            color: "#175e5e",
                            fontWeight: "bold",
                          }}
                        >
                          Sign Up
                        </Button>
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

export default Login;
