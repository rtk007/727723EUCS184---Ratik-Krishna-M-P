import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock, FaPhone } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background-image: url('https://static.vecteezy.com/system/resources/previews/003/058/246/non_2x/cinema-seamless-pattern-background-illustration-free-vector.jpg');
  background-size: cover;
`;

const slideIn = keyframes`
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
`;

const StyledForm = styled.form`
  background-color: rgba(255, 255, 255, 1);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  animation: ${slideIn} 0.5s ease-out; /* Right-to-left slide-in animation */
`;

const SuccessPopup = styled.div`
  position: relative;
  top: -20px;
  margin-bottom: 10px;
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideIn} 0.5s ease-out; /* Right-to-left slide-in animation for success popup */
  
  &:before {
    content: '✔';
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  color: #007bff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', username: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validate fields
    if (!formData.name) return setError('Name is required');
    if (!formData.username) return setError('Username is required');
    if (!/^\d{10}$/.test(formData.phone)) return setError('Phone number must be 10 digits');
    if (formData.password.length < 6) return setError('Password must be at least 6 characters');

    try {
      await axios.post('http://localhost:3001/users', formData);
      setSuccessPopup(true); // Show success popup
      setTimeout(() => {
        setSuccessPopup(false); // Hide popup after 2 seconds
        navigate('/login'); // Redirect to login
      }, 2000);
    } catch (error) {
      console.error("Error during signup:", error);
      setError('Signup failed. Please try again later.');
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        {successPopup && <SuccessPopup>Signup successful!</SuccessPopup>}
        <Logo src="https://th.bing.com/th/id/OIP.yOnfd0B11PsYbfl6nMIznAAAAA?rs=1&pid=ImgDetMain" alt="Salsoul Logo" />
        <Title>Register</Title>
        <InputWrapper>
          <FaUser color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput type="text" name="name" onChange={handleChange} required placeholder="Full Name" />
        </InputWrapper>
        <InputWrapper>
          <FaUser color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput type="text" name="username" onChange={handleChange} required placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <FaPhone color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput type="tel" name="phone" onChange={handleChange} required placeholder="Phone Number" />
        </InputWrapper>
        <InputWrapper>
          <FaLock color="#007bff" style={{ marginRight: '0.5rem' }} />
          <StyledInput type="password" name="password" onChange={handleChange} required placeholder="Password" />
        </InputWrapper>
        {error && <ErrorText>{error}</ErrorText>}
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default SignupForm;
