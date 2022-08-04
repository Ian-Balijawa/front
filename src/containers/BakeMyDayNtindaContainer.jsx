import {Stack, Button, Divider, Typography, Box, TextField} from '@mui/material'
import * as React from 'react'
import {tabPanelSx} from '../constants/tab-styles'

export default function BakeMyDayNtindaContainer() {
    return (
        <React.Fragment>
            <Stack direction="row" sx={{marginBottom: '1rem'}}>
                <Button variant="contained" sx={{marginRight: '5px'}}>
                    Save Changes
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        border: '1px solid #cccc',
                        '&:hover': {border: '1px solid #cccc'},
                        color: 'black',
                        marginRight: '2rem',
                    }}
                >
                    Cancel
                </Button>
                <Button variant="text" sx={{color: 'black'}}>
                    Reset
                </Button>
            </Stack>
            <Divider />

            <Typography>Creation events from Bake My Day Ntinda</Typography>
            <Box
                sx={{marginTop: '2rem', padding: '1rem', ...tabPanelSx}}
                flexDirection="column"
            >
                <Typography>Add recipes to this preparation event</Typography>
                <Divider />

                <Stack
                    direction="row"
                    sx={{
                        fontWeight: 'bold',
                        marginTop: '0.5rem',
                        marginBottom: '-1rem',
                    }}
                >
                    <Stack sx={{width: '50%'}}>
                        <Typography paragraph>Stock Item</Typography>
                    </Stack>

                    <Stack spacing={10} direction="row">
                        <Stack
                            direction="row"
                            spacing={5}
                            sx={{marginRight: '5px'}}
                        >
                            <Typography paragraph>Quantity.</Typography>
                            <Typography paragraph>Total Qty.</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography paragraph>Remarks</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Divider />

                <Stack direction="row" spacing={1} sx={{padding: '5px'}}>
                    <Stack sx={{width: '50%'}}>
                        <TextField
                            size="small"
                            placeholder="Click to add stock item name"
                        />
                    </Stack>

                    <Stack spacing={6} direction="row" sx={{width: '50%'}}>
                        <Stack direction="row" spacing={1} sx={{width: '50%'}}>
                            <TextField
                                size="small"
                                placeholder="Quantity"
                                sx={{width: '50%'}}
                            />
                            <TextField size="small" sx={{width: '50%'}} />
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <TextField size="small" placeholder="Remarks" />
                            <Button variant="contained">Add</Button>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="column" sx={{marginTop: '1rem'}}>
                    <Typography>List of Prepared Items</Typography>
                    <Divider />
                    <Box
                        sx={{
                            align: 'center',
                            padding: '1rem',
                            margin: '0 auto',
                        }}
                        direction="row"
                    >
                        <Typography>
                            No preparation events registered yet
                        </Typography>
                    </Box>
                    <Divider />
                </Stack>
            </Box>
            <br />
        </React.Fragment>
    )
}
