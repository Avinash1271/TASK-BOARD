import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography,Snackbar,SnackbarContent} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (storedUserInfo && storedUserInfo.email === email && storedUserInfo.password === password) {
      window.location.href = '/tasksBoard';
    } else {
      setSnackbarOpen(true); 
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); 
  };

  return (
    <div className='main'>
      <h1>Log in!</h1>
      <div className='input'>
        <TextField
          className='custom-style'
          variant="outlined"
          margin='dense'
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={handleEmailChange}
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
          placeholder="qw@3#Ahe2"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          required
        />
      </div>
      <div className='rememberAndForget'>
        <div className='check'>
          <Checkbox
            size='small'
            inputProps={{ 'aria-label': 'Remember me' }}
            color='default'
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
          <Typography variant="body2" style={{ alignSelf: 'center' }}>Remember me</Typography>
        </div>
        <div>
          <Link to="/signup" className='link'>Forgot Password?</Link>
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
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <p>Don't have an account? <Link to="/signup" className='link'>Register here</Link></p>
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
          message="Invalid email or password. Please try again."
        />
      </Snackbar>
    </div>
  );
};

export default Login;
