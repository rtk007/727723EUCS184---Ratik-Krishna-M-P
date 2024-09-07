import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Implement signup logic here
      console.log('Signup submitted:', {  email, password, });
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
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '8px',
                width: '300px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </div>
                    <Link to="/movie">
                    <button type="submit" style={{
                      backgroundColor: '#f84464',
                      color: 'white',
                      border: 'none',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%',
                        marginTop: '10px'
                      }}>
                        Login
                    </button>
                      </Link>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    Don't have an account? <Link to="/sign" style={{ color: '#f84464' }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
