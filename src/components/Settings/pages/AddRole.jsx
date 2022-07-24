import { Divider, Stack, Typography, Link, RadioGroup, FormControlLabel,TextField, Button, Grid, FormControl } from '@mui/material';
import React from 'react';
import DashboardLayout from '../../DashboardsComponents/Dashboard'
import Header from '../../DashboardsComponents/Header';
import ButtonSaveChanges from '../../DashboardsComponents/HeaderComponents/ButtonsSaveChanges';
import ButtonSaveStartNew from '../../DashboardsComponents/HeaderComponents/ButtonSaveStartNew';
import RolesTable from '../Table/RolesTable';
import useStyles from './SRoleStyles';


export default function SettingsRoles() {
    const classes = useStyles();
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
        <div className={classes.SettingsRoles}>
        <div className={classes.SettingsRolesForm}>         
            <Typography variant="h6" gutterBottom component="div">
                Add New Employee Roles
            </Typography>
            <Divider />
            <Stack container className={classes.formStack} spacing={1}>
                <item>
                    <label>Employee Roles Title</label>
                    <FormControl>
                        <input className={classes.RoleInput} type="text" name="id" maxlength="30" value="" />
                    </FormControl>
                    
                </item>
                
                <item>
                    <span className={classes.RadioLabelGroup1}>
                    <label className={classes.RadioBlock}>Pay Basis</label>
                    <div className={classes.RadioLabels}>
                        <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="A" />Hourly</label>
                        <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="B" />Salary</label>
                    </div>
                    </span>                 
                </item>

                <item>
                    <span className={classes.RoleDefaultPay}>
                        <label>Default Pay</label>
                        <span>
                            {/* <span className={classes.RoleCurrency}>Ush</span> */}
                            <input className={classes.RoleInput} type="text" name="id" maxlength="30" value="" />
                        </span>
                    </span>
                </item>
                
                <item>
                    <span className={classes.RadioLabelGroup1}>
                        <label className={classes.RadioBlockPayBasis}>Pay Basis</label>
                        <div className={classes.RadioLabels}>
                            <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="A" />Hourly</label>
                            <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="B" />Salary</label>
                        </div>
                    </span>                 
                </item>

                <item>
                    <span className={classes.RadioLabelGroupCashier1}>
                    <label className={classes.RadioBlock}>Cashier</label>
                    <div className={classes.RadioLabelsCashier}>
                        <label className={classes.RadioLabel}><input className={classes.RadioLabelLabel} type="radio" name="radgroup" value="A" />Yes</label>
                        <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="B" />No</label>
                    </div>
                    </span>                 
                </item>
            </Stack>
            <Grid className={classes.permissionsTableWrapper} container>
                <Grid item>
                    <Typography className={classes.userPermissions} variant="h6" gutterBottom>
                        User Permissions
                    </Typography>
                    <Link href="#" underline="none" className={classes.userPermissionsLink}>
                        Permissions Guide
                    </Link>
                </Grid>
                <Grid item className={classes.permissionsTable}>
                    <RolesTable/>        
                </Grid>
            </Grid>
            

        
        </div>
    </div>
    </DashboardLayout>
  )
}
