import React, { useState, useEffect } from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import WebSeriesSection from './section2';
import ConcertsSection from './section3';
import MovieCards from './Moviecards';
import Carousel from './Carousel';

const Homepage = () => {
  const location = useLocation();
  const username = location.state?.username || 'Guest';

  // State to control overlay visibility, initially set to false
  const [showOverlay, setShowOverlay] = useState(false);

  // Function to handle overlay close and set localStorage
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowOverlay(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowOverlay(false);
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted !== 'true') {
      // Show overlay after a short delay to ensure server is running
      const timer = setTimeout(() => {
        setShowOverlay(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('id');
    if (userId) {
      console.log("User ID:", userId);
    }
  }, [location.search]);

  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: '#ffffff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      animation: 'fadeIn 1s ease-in-out'
    }}>
      
      {/* Overlay with slide-up animation */}
      {showOverlay && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          color: '#ffffff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'slideUp 0.5s ease-in-out',
          zIndex: 9999,
          height: '50vh',
          maxWidth: '100%',
          backdropFilter: 'blur(5px)',
        }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            Accept Cookies & User Agreement
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', maxWidth: '90%' }}>
            We use cookies to enhance your experience and personalize content. By clicking Accept, you agree to our privacy policy. Read more in our <Link to="/privacy-policy" style={{ color: '#4FC3F7' }}>Privacy Policy</Link> and <Link to="/user-agreement" style={{ color: '#4FC3F7' }}>User Agreement</Link>.
          </Typography>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleAccept}>
              Accept
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleDeny}>
              Deny
            </Button>
          </div>
        </div>
      )}

      <Container sx={{ flex: 1, paddingY: 4 }}>
        <div style={{
          backgroundColor: '#1E1E1E',
          borderRadius: '10px',
          padding: '20px',
          marginBottom: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
          animation: 'slideInFromLeft 1s ease-in-out'
        }}>
          {username && (
            <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#ffffff' }}>
              Welcome, {username}!
            </Typography>
          )}
          <Link to={`/profile/${encodeURIComponent(username)}`}>Profile</Link>
        </div>
        
        <div style={{ animation: 'slideInFromRight 1s ease-in-out' }}>
          <MovieCards />
        </div>

        <div style={{ animation: 'slideInFromLeft 1s ease-in-out' }}>
          <Carousel />
        </div>

        <div style={{ animation: 'slideInFromRight 1s ease-in-out' }}>
          <WebSeriesSection/>
        </div>

        <div style={{ 
          backgroundColor: 'black', 
          border: '1px solid rgba(255, 255, 255, 0.3)', 
          padding: '30px', 
          borderRadius: '8px', 
          display: 'flex', 
          flexDirection: 'row',
          marginTop:'20px',
          marginBottom:'20px',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '300px',
          width: '100%',
          animation: 'fadeIn 1.5s ease-in-out'
        }}>
          <div id='about-us' style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRight: '1px solid rgba(255, 255, 255, 0.3)', 
            height: '100%' 
          }}>
            <h2 style={{ 
              color: '#fff', 
              fontSize: '26px', 
              fontWeight: '600', 
              textTransform: 'uppercase', 
              margin: '0' 
            }}>
              About Us
            </h2>
          </div>
          
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '0 20px', 
            height: '100%' 
          }}>
            <p style={{ 
              color: '#ccc', 
              fontSize: '16px', 
              lineHeight: '1.8', 
              textAlign: 'justify', 
              margin: '0' 
            }}>
              Welcome to our platform! We are passionate about bringing the best entertainment experiences to you. Our team is dedicated to curating an exceptional collection of concerts, web series, and events that cater to diverse tastes and preferences. With years of experience in the industry, we strive to connect artists with their audience and create unforgettable moments. Our mission is to make high-quality entertainment accessible to everyone, anytime, anywhere. Join us on this exciting journey as we continue to innovate and elevate your entertainment experience.
            </p>
          </div>
        </div>

        <div style={{ animation: 'slideInFromLeft 1s ease-in-out' }}>
          <ConcertsSection/>
        </div>
      </Container>

      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInFromRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Homepage;