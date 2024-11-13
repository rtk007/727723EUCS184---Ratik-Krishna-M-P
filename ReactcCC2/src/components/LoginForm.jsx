import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import video from "./1.mp4";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background-image: url('https://static.vecteezy.com/system/resources/previews/003/058/246/non_2x/cinema-seamless-pattern-background-illustration-free-vector.jpg');
  background-size: cover;
`;

// Animation for sliding in from left
const slideIn = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  width: 100%;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.5s ease-out; /* Apply sliding animation */
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: #007bff;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 0.5rem;

  &:focus-within {
    border-color: #0056b3;
    box-shadow: inset 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: .75rem;
  color: #333;
  font-size: 1rem;

  &::placeholder {
    color: #999;
    font-style: italic;
    opacity: .8;
    transition: opacity .3s ease;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  border: none;
  padding: .75rem 1.5rem;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const SignUpText = styled.p`
  color: #666;
  margin-top: 1rem;
`;

const SignUpButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Popup styles
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 1rem;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;



const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    try {
      const response = await axios.get(`http://localhost:3001/users?username=${formData.username}`);
      const user = response.data[0];
      if (user && user.password === formData.password) {
        setIsLoggedIn(true);
        setShowPopup(true); // Show the popup
        setTimeout(() => {
          setShowPopup(false); // Hide the popup after 5 seconds
          navigate('/', { state: { username: formData.username } }); // Redirect to home with username
        }, 3000);
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Logo src="https://th.bing.com/th/id/OIP.yOnfd0B11PsYbfl6nMIznAAAAA?rs=1&pid=ImgDetMain" alt="Salsoul Logo" />
        <Title>Login</Title>
        <InputWrapper>
          <FaUser color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput
            type="text"
            name="username"
            onChange={handleChange}
            required
            placeholder="Username"
          />
        </InputWrapper>
        <InputWrapper>
          <FaLock color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </InputWrapper>
        {error && <ErrorText>{error}</ErrorText>}
        <StyledButton type="submit">Login</StyledButton>
        <SignUpText>
          Don't have an account? <SignUpButton onClick={() => navigate('/signup')}>Sign Up</SignUpButton>
        </SignUpText>
      </StyledForm>

      {showPopup && (
        <>
          <Overlay />
          <Popup>
            <h2>Logged in successfully!</h2>
            <video
              src={video}
              autoPlay
              width="100%"
              height="315"
              controls
            />
          </Popup>
        </>
      )}
    </Container>
  );
};

export default LoginForm;