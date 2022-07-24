import { Typography, Grid, Button, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import './ertable.css';

export default function ERTable() {
  return (
    <div>
        <div>
            <table className="erTable">
                <tr>
                    <th>Employee Role</th>
                    <th>Pay Basis</th>
                    <th>Default Pay</th>
                    <th></th>
                </tr>
                <tr>
                    <td>General Manager</td>
                    <td>Salary</td>
                    <td><span>USh</span>800.0000</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Cashier</td>
                    <td>Salary</td>
                    <td><span>USh</span>800.0000</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Admin</td>
                    <td>Salary</td>
                    <td><span>USh</span>0.00</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Chef</td>
                    <td>Salary</td>
                    <td><span>USh</span>0.00</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Server</td>
                    <td>Hourly</td>
                    <td><span>USh</span>20.0000</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Bartender</td>
                    <td>Hourly</td>
                    <td><span>USh</span>25.0000</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><MoreHorizIcon sx={{fontSize:'24px', color:'#e46036'}}/></Link></Grid>
                        </Grid>
                    </td>
                </tr>

              
            </table>
        </div>
    </div>
  )
}
