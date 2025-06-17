import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import img from './login.jpg';
import logo from '..//assets/logo22.gif'; // Import your logo image

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show alert message and redirect to login page
        window.alert('Successfully signed up! Please log in now.');
        navigate('/login'); // Redirect to the login page
      } else {
        // Handle errors from the server
        setError(data.errors);
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-section">
        <div className="signup-image">
          <img src={img} alt="Sign Up Visual" />
        </div>
        <div className="signup-form">
          <div className="signup-logo-container">
            <img src={logo} alt="Logo" className="signup-logo" />
          </div>
          <h2 className='signup-h2'>Sign Up</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="signup-input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="signup-input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="login-prompt">
            Already have an account? <Link to='/login'> Log in </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
