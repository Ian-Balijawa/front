import React from 'react';
import { Grid, Typography, Divider, FormControl, FormGroup, Button, Avatar, FormHelperText, Select, MenuItem, Stack } from '@mui/material';
import './newEmployee.css';
import { ArrowDropDown } from '@mui/icons-material';
import DashboardLayout from '../../../DashboardsComponents/Dashboard';
import SearchBar from '../../../DashboardsComponents/HeaderComponents/SearchBar';
import Header from '../../../DashboardsComponents/Header';
import ButtonSaveChanges from '../../../DashboardsComponents/HeaderComponents/ButtonsSaveChanges';
import ButtonSaveStartNew from '../../../DashboardsComponents/HeaderComponents/ButtonSaveStartNew';

export default function NewEmployee() {
  return (
    <DashboardLayout>
        <Header>
            <Grid container fullWidth sx={{ borderBottom: 'solid 1px #7A7A7A', padding: '8px'}}>
                <Grid item></Grid>
                <Grid item sx={{ display: 'flex'}}>
                    <div className='buttonSaveChanges'><ButtonSaveChanges text='Save Changes' color='#E46036'/></div>
                    <div><ButtonSaveStartNew text='Save and Start New'/></div>
                </Grid>
                <Grid item xs></Grid>
            </Grid> 
        </Header>
        <div className="newEmployeWrapper">
        <div className="newEmployeeFormTitle">
            <Typography variant="h6" component="div">
                Add New Employee
            </Typography>
        </div>
        <Divider />
        <div className="newEmployeeRegForm">
            <Grid container columnSpacing={10}>
                <Grid item className="formGrid">
                <label className="formGridLabel1">First Name</label>
                    <FormControl>
                        <input className="formGridInput1" type="text" name="id" maxlength="30" value="" />
                    </FormControl>
                </Grid>
                <Grid item className="formGrid">
                <label className="formGridLabel2">Last Name</label>
                    <FormControl>
                        <input className="formGridInput2" type="text" name="id" maxlength="30" value="" />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container className="formGrids" columnSpacing={6}>
                <Grid item>
                <label className="formGridLabel1">User Name</label>
                    <FormControl>
                        <input className="formGridInput1" type="text" name="id" maxlength="30" value="" />
                    </FormControl>
                </Grid>
                <Grid item>
                <label className="formGridLabel3">Employee Role</label>
                    <FormControl>
                        <select name="cars" id="cars" className="formGridInput3">
                            <option value="chef">Chef</option>
                            <option value="server">Server</option>
                            </select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container fullWidth className="formGrids">
                <label className="gridFormPayLable">Pay</label>
                <FormGroup row>
                    <Button className="styledButton" variant="contained">
                        USh
                    </Button>
                    <input className="styledInput" type="text" name="id" maxlength="30" value="" />
                    {/* <TextField variant="outlined" placeholder="username" />     */}
                </FormGroup>
            
            </Grid>
            <Grid container className="formGrids">
            <label className="gridFormPhoneLable">Mobile Phone</label>
                <FormGroup row>
                    <Button className="styledButton" variant="contained">
                        <Grid container columnSpacing={1} className="countryCode">
                            <Grid item><Avatar alt="flag" src="https://www.gettysburgflag.com/media/catalog/product/cache/2/small_image/460x368/9df78eab33525d08d6e5fb8d27136e95/u/g/uganda-flag.jpg" sx={{ width: 16, height: 16 }}/></Grid>
                            <Grid item>+256</Grid>
                            <Grid item><ArrowDropDown sx={{mt:1}}/></Grid>
                        </Grid>
                    </Button>
                    <input className="styledInput2" type="text" name="id" maxlength="30" value="" />
                    {/* <TextField variant="outlined" placeholder="username" />     */}
                </FormGroup>
            </Grid>
            <Grid container className="formGrids">
                <Grid item>
                    
                </Grid>
            </Grid>
            <Grid container className="formGrids">
                <Stack>
                    <item>
                        <label className="gridFormPassLabel">Passcode<span></span></label><br></br>
                    </item>
                    <item>
                    <Typography className="passCodeDefText" variant="body1">Enter 4 digit numerical code that your<br></br>employee will enter to log into your POS</Typography>
                    </item>
                </Stack>
                <FormControl>
                    <input className="gridFormPassInput" type="text" name="id" maxlength="30" value="" />
                    <FormHelperText sx={{color: 'red'}}>Passcode is required</FormHelperText>
                </FormControl>
            </Grid>
            <Grid container className="formGrids">
                <label className="gridFormEmailLabel">Email Address</label>
                <FormControl>
                    <input className="gridFormEmailInput" type="text" name="id" maxlength="30" value="" />
                </FormControl>
            </Grid>

            <Grid container className="formGrids">
                <label className="gridFormTINLabel">Tax Identification Number</label>
                <FormControl>
                    <input className="gridFormTINInput" type="text" name="id" maxlength="30" value="" />
                </FormControl>
            </Grid>
            
            <Grid container className="formGrids">
                <label className="gridFormNinLabel">National ID Number</label>
                <FormControl>
                    <input className="gridFormNinInput" type="text" name="id" maxlength="30" value="" />
                </FormControl>
            </Grid>
            <Grid container className="formGrids">
                <label className="gridFormAddressLabel">Address</label>
                <FormControl>
                    <textarea className="gridFormAddressInput" type="text" rows="4" name="id" maxlength="30" value="" />
                </FormControl>
            </Grid>
        </div>

    </div>
    </DashboardLayout>
  )
}
