
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic here
    console.log('Signup submitted:', { username, email, password, confirmPassword });
    // After successful signup, navigate to home page
    navigate('/movie');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("https://wallpapercave.com/wp/wp5302087.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ backgroundColor: 'rgba(51, 51, 51, 0.8)', padding: '10px 0', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>MovieTIME</h1>
          <nav>
            <Link to="/sign">
              <button style={{ color: 'white', marginRight: '15px', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Sign Up</button>
            </Link>
            <Link to="/log">
              <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Login</button>
            </Link>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: '#f84464',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '10px'
          }}>Sign Up</button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;

