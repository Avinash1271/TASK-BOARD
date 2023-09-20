import React, { useState } from 'react';
import { TextField, Button, Checkbox, Typography,Snackbar, SnackbarContent} from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    acceptedTerms: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSignup = () => {
    // Store user information in local storage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setSnackbarOpen(true); 
    setUserInfo({
      username: '',
      email: '',
      password: '',
      acceptedTerms: false,
    })
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); 
  };

  return (
    <div className='main'>
      <h1>Sign up</h1>
      <div className='input'>
        <TextField
          className='custom-style'
          variant="outlined"
          margin='dense'
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
          value={userInfo.username}
          onChange={handleInputChange}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          required
        />
      </div>
      <div className='input'>
        <TextField
          className='custom-style'
          variant="outlined"
          margin='dense'
          label="Email"
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={userInfo.email}
          onChange={handleInputChange}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          required
        />
      </div>
      <div className='input'>
        <TextField
          className='custom-style'
          variant="outlined"
          margin='dense'
          label="Password"
          type="password"
          name="password"
          placeholder="qw@3#Ahe2"
          value={userInfo.password}
          onChange={handleInputChange}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          required
        />
      </div>
      <div className='rememberAndForget'>
        <div className='check'>
          <Checkbox
            required
            size='small'
            inputProps={{ 'aria-label': 'Remember me' }}
            color='default'
            checked={userInfo.acceptedTerms}
            onChange={handleInputChange}
            name="acceptedTerms"
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
          <Typography variant="body2" style={{ alignSelf: 'center' }}>
            I accept the terms & conditions
          </Typography>
        </div>
      </div>
      <div className='btn'>
        <Button
          variant="contained"
          size='large'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              color: 'white',
            },
          }}
          onClick={handleSignup} // Call handleSignup when button is clicked
        >
          SignUp
        </Button>
      </div>
      <p>Already have an account <Link to="/login" className='link'>Login here</Link></p>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        
      >
        <SnackbarContent style={{
            backgroundColor:'white',
            color:'black'
          }}
          message="SuccessFully registered"
        />
      </Snackbar>
    </div>
  );
}

export default Signup;
