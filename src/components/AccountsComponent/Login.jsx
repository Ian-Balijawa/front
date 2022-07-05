import React from 'react';
import { Container, FormControl, Box, Button }  from '@mui/material';
import logo from '../../resources/Images/LogoDark.svg';
import './login.css';

export default function Login() {
  return (
    <Container maxWidth="sm" className="login-section">
        <Container fixed className="login-box">        
            <Box className="login-fields">
              <div className="logo-wrapper">
                  <img src={ logo } className="login-logo" alt="gold-post-logo" />
              </div>
              <hr></hr>
              <div className="login-title">
                  <h2>Log in to your GOLDPOS account</h2>
              </div>
              <div className="login-form">
                      <FormControl fullWidth>
                          <label for="email" htmlFor="my-input">Email or Username</label>
                          <input sx={{m: "2"}} type="text" id="my-input" aria-describedby="my-helper-text" />
                      </FormControl>
                      <FormControl fullWidth>
                        <span className="password-row">
                          <label for="password" htmlFor="my-input">Password</label>
                          <span className="login-link-text-right">
                              <a className="login-link" href='/'>Forgot Password?</a>
                          </span>
                        </span>
                          <input type="text" id="my-input" aria-describedby="my-helper-text" />
                      </FormControl>

                      <Button fullWidth variant="contained" className="login-button" type="submit">Sign In</Button>
              </div>
            </Box>
            <div className="login-others">
              <span className="login-link-text-left">
                  Questions
                  <a className="login-link" href='/'>Visit Help?</a>
              </span>
              <span className="login-link-text-right">
                  New to GOLDPOS
                  <a className="login-link"href='/'>Join Now</a>
              </span>                    
            </div>
        </Container>
    </Container>
  )
}
