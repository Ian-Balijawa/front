import { Box, Typography } from '@mui/material'
import React from 'react'

function GPMain(props: { children: any }) {
  const {children} = props
  return (
    <Box sx={{overflowX: "hidden", marginLeft: "240px",boxSizing: "border-box", p: {xs: "0", md: "35px", sm: "35px", lg: "35px",}, width: "auto", minHeight: "100vh", }}>
        <Box sx={{overflowX: "hidden",}}>
          {children}
        </Box>
    </Box>
  )
}

export default GPMain