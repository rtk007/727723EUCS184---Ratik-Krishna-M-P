import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './components/LoginForm';
import Homepage from './components/home';
import SignupForm from './components/SignupForm';
import Movies from './components/movies';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import MovieDetails from './components/MovieDetails';
import Theaters from './components/Theaters';
import Checkout from './components/Checkouts';
import Confirmation from './components/Confirmation';
import Profile from './components/Profile';

const MainApp = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render the Header */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile/:username" element={<Profile />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/theaters/:id" element={<Theaters />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Conditionally render the Footer */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <Footer />
      )}
    </>
  );
};

export default MainApp;