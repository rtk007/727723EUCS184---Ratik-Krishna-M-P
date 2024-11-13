import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background-color: #333333;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  width:90%;
  margin: 0 auto;
  background-color: #222;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FormGroup = styled.div`
  flex: 1 1 calc(50% - 10px);
  min-width: 200px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #444;
  border: 1px solid #555;
  border-radius: 4px;
  color: white;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.1s;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #bd2130;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #6c757d;
  color: white;
  &:hover {
    background-color: #5a6268;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Profile = () => {
  const [profile, setProfile] = useState({
    id: '',
    username: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users?username=${username}`);
        if (response.data.length > 0) {
          setProfile(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profile.password !== profile.confirmPassword) {
      
      return;
    }
    setShowUpdateConfirmation(true);
  };

  const confirmUpdate = async () => {
    try {
      const updatedProfile = {
        name: profile.name,
        phone: profile.phone,
        password: profile.password,
      };
      const response = await axios.put(`http://localhost:3001/users/${profile.id}`, updatedProfile);
      if (response.status === 200) {
        alert('Profile updated successfully!');
        navigate('/')
        setIsEditing(false);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(`Failed to update profile. Error: ${error.message}`);
    }
    setShowUpdateConfirmation(false);
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/users/${profile.id}`);
      if (response.status === 200) {
        alert('Account deleted successfully.');
        navigate('/login');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      alert(`Failed to delete account. Error: ${error.message}`);
    }
    setShowDeleteConfirmation(false);
  };

  return (
    <Container>
      <Title>User Profile</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              readOnly
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={profile.name || ''}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone || ''}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </FormGroup>
          {isEditing && (
            <>
              <FormGroup>
                <Label htmlFor="password">New Password:</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={profile.password || ''}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm New Password:</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={profile.confirmPassword || ''}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </>
          )}
          {isEditing ? (
            <PrimaryButton type="submit">Update Profile</PrimaryButton>
          ) : (
            <PrimaryButton type="button" onClick={() => setIsEditing(true)}>Edit Profile</PrimaryButton>
          )}
        </Form>
      </FormContainer>
      <DangerButton onClick={handleDeleteAccount}>Delete Account</DangerButton>

      {showUpdateConfirmation && (
        <Modal>
          <ModalContent>
            <h3>Confirm Update</h3>
            <p>Are you sure you want to update your profile?</p>
            <PrimaryButton onClick={confirmUpdate}>Yes, Update</PrimaryButton>
            <SecondaryButton onClick={() => setShowUpdateConfirmation(false)}>Cancel</SecondaryButton>
          </ModalContent>
        </Modal>
      )}

      {showDeleteConfirmation && (
        <Modal>
          <ModalContent>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <DangerButton onClick={confirmDelete}>Yes, Delete</DangerButton>
            <SecondaryButton onClick={() => setShowDeleteConfirmation(false)}>Cancel</SecondaryButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Profile;