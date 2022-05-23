import Box from '@mui/material/Box/Box'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Inventory() {
  return (
    <Box sx={{height:"100vh", display: "grid",margin: "0",}}>
      <GPAppBar />
        <GPSideBar />
        <GPMain>
          Inventory
        </GPMain>
    </Box>
  )
}

export default Inventory