import { Box } from '@mui/material'
import React from 'react'

function GPMain(props: { children: any }) {
  const {children} = props
  return (
    <Box sx={{ display: "grid", marginLeft: "240px", boxSizing: "border-box", p: "20px", width: "auto", height: "100vh", }}>
      <Box>{children}</Box>
    </Box>
  )
}

export default GPMain