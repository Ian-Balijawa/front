import { Box } from '@mui/material'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Settings() {
  return (
    <Box sx={{height:"100vh", display: "grid",margin: "0",}}>
    <GPAppBar />
      <GPSideBar />
      <GPMain>
        Settings
      </GPMain>
  </Box>
  )
}

export default Settings