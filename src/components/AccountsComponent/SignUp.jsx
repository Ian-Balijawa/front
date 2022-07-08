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
          full_name: data.get('full_name'),
          email: data.get('email'),
          pnumber: data.get('pnumber'),
          bname: data.get('bname'),
          password: data.get('password'),
          btype: data.get('bype'),
          blocations: data.get('blocations'),
        });
      };

  return (
    <div className={classes.signupWrapper}>
        <Box className={classes.SignupBox} sx={{width: 400, height: 'auto'}}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={logo} alt="GOLDPOS logo" />
            </div>

            <Divider />

            <Box component="form" noValidate onSubmit={handleSubmit} className={classes.form}>
                <Typography className={classes.signupHead}  variant="h6" align="left">
                    Lets create your account
                </Typography>
                <Typography className={classes.signupPara} sx={{mb: 3}} variant="subtitle2" align="left" gutterBottom>Explore the world's most powerful <br></br>POS for your business</Typography>

                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Full name" id="full_name" name="full_name" autoFocus required margin="normal" />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Email address" id="email" name="email" autoFocus required margin="normal"  />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Phone number" id="pnumber" name="pnumber" autoFocus required margin="normal"  />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Business name" id="bname" name="bname" autoFocus required margin="normal"  />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Password" id="password" name="password" autoFocus required margin="normal"  />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Business type" id="btype" name="btype" autoFocus required margin="normal"  />
                </FormControl>
                <FormControl fullWidth>
                    <input className={classes.userInput}  placeholder="Number of locations" id="blocations" name="blocations" autoFocus required margin="normal"  />
                </FormControl>
            </Box>       
        </Box>
        <div className={classes.signupOthers}>
            <Grid container>
                <Grid item xs>
                <Button variant="contained" className={classes.signupButton} type="submit">Sign Up</Button>
                </Grid>
                <Grid item>
                    <span>Already have an account?</span>&nbsp;&nbsp;
                  <Link className={classes.signupLink} href="#" variant="body2">
                    Sign In?
                  </Link>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}
