import { Typography, Grid, Button, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import './etable.css';

export default function ESetup() {
  return (
    <div>
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Job Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Mwesigye </td>
                    <td>Nicholas</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>David</td>
                    <td>Brian</td>
                    <td>Bartender</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Peace</td>
                    <td>Kyomugisha</td>
                    <td>Cashier</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Noah</td>
                    <td>Trevor</td>
                    <td>Server</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Derulo</td>
                    <td>Frank</td>
                    <td>Chef</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>

                <tr>
                    <td>Ann</td>
                    <td></td>
                    <td>General Manager</td>
                    <td>Active</td>
                    <td>
                        <Grid sx={{display:'flex'}}>
                            <Grid item><Link><EditIcon /></Link></Grid>
                            <Grid item><Link><MoreHorizIcon /></Link></Grid>
                        </Grid>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}
