import { Box } from '@mui/material'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Sales() {
  return (
    <Box sx={{height:"100vh", display: "grid",margin: "0",}}>
      <GPAppBar />
        <GPSideBar />
        <GPMain>
          Sales
        </GPMain>
    </Box>
  )
}

export default Sales