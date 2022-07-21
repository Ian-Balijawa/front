import { Typography, Grid } from '@mui/material';
import React from 'react';
import './rtable.css';

export default function RolesTable() {
  return (
    <div>
        <div>
            <table>
                <tr>
                    <th>Permission</th>
                    <th>Enabled?</th>
                </tr>
                <tr>
                    <th>1. Pos Access</th>
                    <th><input type="checkbox" id="vehicle2" name="vehicle2" /></th>
                </tr>
                <tr>
                    <td>Table Service Mode</td>
                    <td><input type="checkbox" id="vehicle2" name="vehicle2" /></td>
                </tr>
                <tr>
                    <td>Cash Drawer Access</td>
                    <td><input type="checkbox" id="vehicle2" name="vehicle2" /></td>
                </tr>
                <tr>
                    <td>Reports</td>
                    <td><input type="checkbox" id="vehicle2" name="vehicle2" /></td>
                </tr>
                <tr>
                    <th>2. Dashboard</th>
                    <th><input type="checkbox" id="vehicle2" name="vehicle2" /></th>
                </tr>
                <tr>
                    <td>Void Items</td>
                    <td><input type="checkbox" id="vehicle2" name="vehicle2" /></td>
                </tr>
                <tr>
                    <td>Discounts</td>
                    <td><input type="checkbox" id="vehicle2" name="vehicle2" /></td>
                </tr>
            </table>
        </div>
    </div>
  )
}
