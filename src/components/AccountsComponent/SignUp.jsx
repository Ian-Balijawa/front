import React from 'react';
import { Container,FormControl, Button }  from '@mui/material';
import logo from '../../resources/Images/LogoDark.svg';
import './signup.css';

export default function Login() {
  return (
    <Container maxWidth="sm" className="signup-container">
        <Container fixed className="signup-box">        
            <div className="signup-logo-wrapper">
                <img src={ logo } className="login-logo" alt="gold-post-logo" />
            </div>
            <hr></hr>
            <div className="signup-title">
                <h2>Let's create your account</h2>
                <p>Explore the world's most powerful POS for your business</p>
            </div>
            <div className="signup-form">
                    <FormControl fullWidth>
                        <input type="text" placeholder="Full name" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Email address" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Phone number" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Business name" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Password" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Business type" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl fullWidth>
                        <input type="text" placeholder="Number of locations" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <span className="signup-others">
                        <Button variant="contained" className='sign-button'>Sign Up</Button>
                        <span className="signup-link-text">
                            Already have an account?
                            <a className="signup-link"href='#'>Sign In?</a>
                        </span>
                        </span>
            </div>
        </Container>
    </Container>
  )
}
