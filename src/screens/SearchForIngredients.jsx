import {
    TextField,
    Stack,
    Button,
    Divider,
    ButtonGroup,
    FormGroup,
    FormControlLabel,
    Checkbox,
    AppBar,
    Toolbar,
    Typography,
    Box,
    CssBaseline,
} from '@mui/material'
import * as React from 'react'

import {SearchIngredientsContainer} from '../containers'
import {BreadCrumbs, SideBar} from '../components'

export default function AddNewRecipe() {
    const drawerWidth = 240

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    backgroundColor: 'white',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <BreadCrumbs from="Inventory" to="Recipe:New" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideBar drawerWidth={drawerWidth} />
            <Box
                component="Container"
                sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
            >
                <Toolbar />
                <SearchIngredientsContainer />
            </Box>
        </Box>
    )
}
