import { AppBar, Box, Breadcrumbs, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {links} from "./GPSideBar"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation } from 'react-router-dom';
function GPAppBar() {
    const {pathname} = useLocation()
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    marginLeft: '240px',
                    display: 'grid',
                    background: '#fff',
                    color: '#555',
                    height: '70px',
                    width: 'auto',
                }}
            >
                <Toolbar variant="dense" sx={{display: 'flex'}}>
                    <IconButton edge="start" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon />
                    </IconButton>
                    <Toolbar variant="dense">
                        {links.map( link => {
                           if (pathname === link.path )
                            return (
                                <>
                                <Box key={link.name} sx={{fontSize: "1px"}}>{link.icon}</Box>
                                <Typography sx={{ml: "10px"}} variant="h5" color="inherit" component="div" >{link.name}</Typography>
                                {/* <Breadcrumbs
                                 separator={<NavigateNextIcon fontSize="small" />}aria-label="breadcrumb">
                                <Box key={link.name}>{link.icon}</Box>
                                <Typography variant="h6" color="inherit" component="div" >{link.name}</Typography>
                                </Breadcrumbs> */}
                                
                                </>
                            )
                        })}
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default GPAppBar
