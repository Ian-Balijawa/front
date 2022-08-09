import { Typography, Grid } from '@mui/material';
import React from 'react';
import './rtable.css';

export default function RolesTable() {
  return (
    <div>
        <div className="rolesTableWrapper">
            <table>
                <thead>
                    <tr>
                        <th>Permission</th>
                        <th>Enabled?</th>
                    </tr>
                </thead>     
                <thead>
                <tr>
                    <th>1. Pos Access</th>
                    <th><input type="checkbox" id="permission" name="permission" /></th>
                </tr>
                </thead>
                <tr>
                    <td>Table Service Mode</td>
                    <td><input type="checkbox" id="permission" name="permission" /></td>
                </tr>
                <tr>
                    <td>Cash Drawer Access</td>
                    <td><input type="checkbox" id="permission" name="permission" /></td>
                </tr>
                <tr>
                    <td>Reports</td>
                    <td><input type="checkbox" id="permission" name="permission" /></td>
                </tr>
                <thead>
                    <tr>
                        <th>2. Dashboard</th>
                        <th><input type="checkbox" id="permission" name="permission" /></th>
                    </tr>
                </thead>
                <tr>
                    <td>Void Items</td>
                    <td><input type="checkbox" id="permission" name="permission" /></td>
                </tr>
                <tr>
                    <td>Discounts</td>
                    <td><input type="checkbox" id="permission" name="permission" /></td>
                </tr>
            </table>
        </div>
    </div>
  )
}
