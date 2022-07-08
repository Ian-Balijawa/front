import React from 'react';
import {Box, Divider, Typography, Grid, FormControl, Button, Link} from '@mui/material';
import logo from '../../resources/Images/LogoDark.svg';
import useStyles from './AllStyles';

export default function Signin() {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

  return (
    <div className={classes.loginWrapper}>
        <Box className={classes.box}sx={{width: 400, height: 'auto'}}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={logo} alt="GOLDPOS logo" />
            </div>

            <Divider />

            <Box component="form" noValidate onSubmit={handleSubmit} className={classes.form}>
                <Typography sx={{mb: 3}} variant="h6" align="left">
                    Log In to your GOLDPOS account
                </Typography>

                <FormControl fullWidth>
                    <label for="email" htmlFor="email">Email or Username</label>
                    <input className={classes.userInput}  id="email" name="email" autoFocus required margin="normal" />
                </FormControl>

                <FormControl fullWidth>
                    <span>
                        <label for="password" htmlFor="my-input">Password</label>
                        <span>
                            <Link className={classes.loginLink} href='/'>Forgot Password?</Link>
                        </span>
                    </span>
                    <input className={classes.userInput} type="password" id="password" name="password" required margin="normal" />
                </FormControl>

                <Button fullWidth variant="contained" className={classes.loginButton} type="submit">Sign In</Button>
            </Box>       
        </Box>
        <div className={classes.loginOthers}>
            <Grid container>
                <Grid item xs>
                    <span>Questions</span>&nbsp;&nbsp;
                  <Link className={classes.loginotherLink} href="#" variant="body2">
                    Visit Help?
                  </Link>
                </Grid>
                <Grid item>
                    <span>New to GOLDPOS</span>&nbsp;&nbsp;
                  <Link className={classes.loginotherLink} href="#" variant="body2">
                    Sign Up?
                  </Link>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}
