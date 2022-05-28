import { Box } from '@mui/material'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Reports() {
  return (
    <Box sx={{height:"100vh", display: "grid",margin: "0",}}>
    <GPAppBar />
      <GPSideBar />
      <GPMain>
        Reports
      </GPMain>
  </Box>
  )
}

export default Reports