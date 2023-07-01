import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {TextField,Typography} from "@mui/material";
import { LoadingButton } from "@mui/lab";


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, SetSecurityQuestion] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    // Password validation regex pattern
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    return passwordRegex.test(password);
  };


  const Registration = async (e) => {
    e.preventDefault();
    try {
      if (!validatePassword()) {
        console.log('Invalid Password Format');
        alert(
          'Invalid Password Format. Password should have a minimum length of 8 characters, at least 1 uppercase character, 1 lowercase character, 1 number, and 1 special character.'
        );
        return;
      }
      if (password !== confirmPassword) {
        console.log('Passwords do not match');
        alert('Passwords do not match.');
        return;
      }
    
      const response = await fetch('http://localhost:8080/users/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          emailID: email,
          password: password,
          confirmPassword:confirmPassword,
        }),
      });

      if (response.ok) {
        // Signup successful
        console.log('Resgistration successful!');
        alert('Resgistration successful');
        navigate('/login');
      }
      else if (response.status === 400){
        //Signup failed
        console.log('Invalid Password');
        alert('Invalid Password');
      }
      else {
        // Signup failed
        console.error('Resgistration Unsuccessful');
        alert('Resgistration Unsuccessful!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
       <Typography align="center" variant="h6">Register</Typography>
      <form onSubmit={Registration}>
        <TextField
        fullWidth
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <TextField
        fullWidth
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TextField
        fullWidth
          type="text"
          placeholder="Security Question"
          required
          value={securityQuestion}
          onChange={(e) => SetSecurityQuestion(e.target.value)}
        />
         <LoadingButton
            fullWidth type="submit">Sign Up
            </LoadingButton>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;