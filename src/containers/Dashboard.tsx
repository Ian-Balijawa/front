import Box from '@mui/material/Box'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'
import Home from '../pages/Home'

const Dashboard = () => {
    return (
        <Box sx={{boxSizing: "border-box", height:"100vh", display: "grid",margin: "0",}}>
            <GPAppBar />
            <GPSideBar />
            <GPMain>
                Dash
            </GPMain>
        </Box>
    )
}
export default Dashboard
