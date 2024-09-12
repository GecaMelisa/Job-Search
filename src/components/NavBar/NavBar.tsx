import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { RootState } from "../../store";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./navbar.css";

const NavBar = () => {
  const { userToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Koristimo useMediaQuery da proverimo širinu ekrana
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div className="sidebar-content" onClick={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/companies">
          <ListItemText primary="Companies" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        {userToken ? (
          <>
            <ListItem button component={Link} to={`/userProfile/${userToken}`}>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/registration">
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  return (
    <>
      {!isSmallScreen ? (
        <AppBar
          position="static"
          className="navbar"
          style={{ backgroundColor: "white", marginTop: "20px" }}
        >
          <Toolbar
            className="toolbar"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Typography variant="h4" component="div" className="navbar-title">
              <Link to="/home" className="navbar-title navbar-link">
                <strong>Job</strong>
                <span className="navbar-title-highlight">Match</span>
              </Link>
            </Typography>
            <div className="navbar-buttons">
              <Button color="inherit" component={Link} to="/home">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/companies">
                Companies
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
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
      ) : (
        <>
          <AppBar
            position="static"
            className="navbar"
            style={{ backgroundColor: "white", marginTop: "20px" }}
          >
            <Toolbar
              className="toolbar"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <Typography variant="h4" component="div" className="navbar-title">
                <Link to="/home" className="navbar-title navbar-link">
                  <strong>Job</strong>
                  <span className="navbar-title-highlight">Match</span>
                </Link>
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerContent}
          </Drawer>
        </>
      )}
    </>
  );
};

export default NavBar;
