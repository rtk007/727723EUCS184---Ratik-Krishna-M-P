import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the menu anchor element
  const [loading, setLoading] = useState(false); // State to manage loading animation

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element for the menu
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login state to false
    handleCloseMenu(); // Close the menu after logout
  };

  const handleLoginClick = () => {
    setLoading(true); // Start loading animation
    setTimeout(() => {
      setLoading(false); // Stop loading animation after 1.5 seconds
    }, 1500);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          {/* Logo Image */}
          <img 
            src="https://www.disco-disco.com/images/salsoul-goodtimes-logo.gif" 
            alt="Logo" 
            style={{
              height: '50px',
              marginRight: '390px',
              verticalAlign: 'middle'
            }}
          />

          {/* Navigation Buttons */}
          <Button color="inherit" component={Link} to="/" sx={buttonStyles}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/movies" sx={buttonStyles}>
            Movies
          </Button>
          <Button color="inherit" sx={buttonStyles}>
            Concerts
          </Button>
          <Button color="inherit" sx={buttonStyles}>
            Watch
          </Button>
          <Button color="inherit" href="#about-us" sx={buttonStyles}>
            About
          </Button>
          <Button color="inherit" href="#footer" sx={buttonStyles}>
            Contact
          </Button>

          {/* Profile Icon or Login Button */}
          {isLoggedIn ? (
            <>
              <Button
                color="inherit"
                sx={{ color: '#ffffff' }}
                onClick={handleProfileClick} // Open menu on click
              >
                <AccountCircleIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)} // Check if the menu should be open
                onClose={handleCloseMenu} // Close the menu
              >
                {/* Profile Menu Item */}
                <MenuItem component={Link} to="/profile" onClick={handleCloseMenu}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              onClick={handleLoginClick}
              component={Link}
              to="/login"
              color="inherit"
              sx={{ ...buttonStyles, color: '#ffffff', position: 'relative' }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: '#ffffff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              ) : (
                'Login'
              )}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

// Button styles
const buttonStyles = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '500',
  mx: 1.5,
  '&:hover': {
    backgroundColor: '#333333',
    color: '#f0a500'
  }
};

export default Header;
