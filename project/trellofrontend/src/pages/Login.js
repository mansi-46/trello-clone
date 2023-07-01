import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful!');
        alert('Login successful');
        navigate('/home');
      } else if (response.status === 401) {
        // Unauthorized
        console.log('Invalid credentials');
        alert('Invalid email or password');
      } else {
        // Login failed
        console.error('Login Unsuccessful');
        alert('Login Unsuccessful!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <Typography align="center" variant="h6">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoadingButton fullWidth type="submit">
          Sign In
        </LoadingButton>
      </form>
      <p>
        Forgot your password? <Link to="/forgot-password">Reset Password</Link>
      </p>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;