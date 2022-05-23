import Box from '@mui/material/Box/Box'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'

function Categories() {
  return (
    <Box>
        <GPAppBar />
        <GPSideBar />
        <GPMain>
            Categories
        </GPMain>
    </Box>
  )
}

export default Categories