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
          email: data.get('email')
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
                <Typography className={classes.signupHead}  variant="h6" align="left">
                    Forgot Password?
                </Typography>

                <Typography className={classes.signupPara} sx={{mb: 2}} variant="subtitle2" align="left" gutterBottom>
                    Enter your email address and we'll email you a<br></br> link to reset your password
                </Typography>

                <FormControl fullWidth>
                    <label for="email" htmlFor="email">Email</label>
                    <input className={classes.userInput}  id="email" name="email" autoFocus required margin="normal" />
                </FormControl>

                <div className={classes.passResetOthers}>
                    <Grid container>
                        <Grid item xs>
                            <Button variant="contained" className={classes.passButton} type="button">Back to sign in</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" className={classes.passButton} type="button">Reset password</Button>
                        </Grid>
                    </Grid>
                </div>
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
