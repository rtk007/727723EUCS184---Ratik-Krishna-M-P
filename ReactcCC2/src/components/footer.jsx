  import React from 'react';
  import { AppBar, Toolbar, Typography, Button, TextField, IconButton, Box } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MovieIcon from '@mui/icons-material/Movie';
  import TheatersIcon from '@mui/icons-material/Theaters';
  import ContactSupportIcon from '@mui/icons-material/ContactSupport';
  import HomeIcon from '@mui/icons-material/Home';

  const Footer = () => {
    return (
      <AppBar id='footer' position="static" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Movie Ticket Booking
          </Typography>
          <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
          <Button color="inherit" startIcon={<MovieIcon />}>Movies</Button>
          <Button color="inherit" startIcon={<TheatersIcon />}>Theaters</Button>
          <Button color="inherit" startIcon={<ContactSupportIcon />}>Contact</Button>
        </Toolbar>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ marginRight: 2 }}>Subscribe to our newsletter:</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              sx={{ backgroundColor: 'white', marginRight: 1 }}
            />
            <Button variant="contained" color="primary">Subscribe</Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };

  export default Footer;
