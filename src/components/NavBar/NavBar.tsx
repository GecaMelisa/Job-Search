import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { RootState } from "../../store";
import "./NavBar.css";

const NavBar = () => {
  const { userToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{ backgroundColor: "transparent", marginTop: "20px" }}
    >
      <Toolbar
        className="toolbar"
        style={{ justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h4" component="div" className="navbar-title">
          <Link to="/home" className="navbar-title navbar-link ">
            <strong>Job</strong>Match
          </Link>
        </Typography>
        <div className="navbar-buttons">
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/companies">
            Companies
          </Button>
          {userToken ? (
            <>
              <Button
                color="inherit"
                component={Link}
                to={`/userProfile/${userToken}`}
              >
                My Profile
              </Button>
              <Button color="inherit" onClick={() => dispatch(logout())}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/registration">
                Register
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
