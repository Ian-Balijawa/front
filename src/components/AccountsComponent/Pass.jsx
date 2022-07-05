import React from 'react';
import { Container,FormControl, Button, Grid, Box }  from '@mui/material';
import logo from '../../resources/Images/LogoDark.svg';
import './pass.css';

export default function Login() {
  return (
    <Container maxWidth="sm" className="pass-container">
        <Container fixed className="pass-box">        
            <Box className="pass-fields">
                <div className="pass-logo-wrapper">
                    <img src={ logo } className="login-logo" alt="gold-post-logo" />
                </div>
                <hr></hr>
                <div className="pass-title">
                    <h2>Forgot Password?</h2>
                    <p>Enter your email address and we'll email you a<br></br> link to reset your password</p>
                </div>
                <div className="pass-form">
                    <FormControl fullWidth>
                        <label htmlFor="my-input">Email address</label>
                        <input type="text" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>

                    <Grid container direction="row" justifyContent="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs="auto">
                            <Button variant="contained" className="pass-button" type="button">Back to sign in</Button>
                        </Grid>
                        <Grid item xs="auto">
                            <Button variant="contained" className="pass-button" type="button">Reset password</Button>
                        </Grid>
                    </Grid>
                    {/* <Button className='form_button'>Back to sign in</Button> */}
                    {/* <Button className='form_button'>Reset password</Button> */}
                </div>
            </Box>
            <div className="pass-others">
                <span className="pass-link-text-left">
                    Questions?
                    <a className="pass-link" href='#'>Visit Help?</a>
                </span>
                <span className="pass-link-text-right">
                    New to GOLDPOS?
                    <a className="pass-link" href='#'>Join Now</a>
                </span>                    
            </div>
        </Container>
    </Container>
  )
}
