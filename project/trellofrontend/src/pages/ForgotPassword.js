import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      // Code for handling password reset
      // ...
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <Typography align="center" variant="h6">Forgot Password</Typography>
      <form onSubmit={handleResetPassword}>
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
          type="text"
          placeholder="Security Question"
          required
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
        />
        <LoadingButton fullWidth type="submit">
          Reset Password
        </LoadingButton>
      </form>
      <p>
        Remembered your password? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;