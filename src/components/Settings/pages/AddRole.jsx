import { Divider, Stack, Typography, Link, RadioGroup, FormControlLabel,TextField, Button, Grid, FormControl } from '@mui/material';
import React from 'react';
import DashboardLayout from '../../DashboardsComponents/Dashboard'
import RolesTable from '../Table/RolesTable';
import useStyles from './SRoleStyles';


export default function SettingsRoles() {
    const classes = useStyles();
  return (
    <DashboardLayout>
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
                            <span className={classes.RoleCurrency}>Ush</span>
                            <input className={classes.RoleInput} type="text" name="id" maxlength="30" value="" />
                        </span>
                    </span>
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
                    <span className={classes.RadioLabelGroup1}>
                    <label className={classes.RadioBlock}>Pay Basis</label>
                    <div className={classes.RadioLabels}>
                        <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="A" />Hourly</label>
                        <label className={classes.RadioLabel}><input type="radio" name="radgroup" value="B" />Salary</label>
                    </div>
                    </span>                 
                </item>
            </Stack>
            <Grid container>
                <Grid item>
                    <Typography variant="h6" gutterBottom component="div">
                        User Permissions
                    </Typography>
                    <Link href="#" underline="none">
                        Permissions Guide
                    </Link>
                </Grid>
                <Grid fullWidth xs item>
                    <RolesTable/>        
                </Grid>
            </Grid>
            

        
        </div>
    </div>
    </DashboardLayout>
  )
}
