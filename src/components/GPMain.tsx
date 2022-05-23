import { Box, Typography } from '@mui/material'
import React from 'react'

function GPMain(props: { children: any }) {
  const {children} = props
  return (
    <Box sx={{ display: "grid", marginLeft: "240px", boxSizing: "border-box", p: "35px", width: "auto", minHeight: "100vh", }}>
        <Box>
          {children}
        </Box>

    </Box>
  )
}

export default GPMain