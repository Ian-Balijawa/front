import {Stack, Button, Divider, Typography} from '@mui/material'
import * as React from 'react'
import {AddOutlined} from '@mui/icons-material'

export default function SelectOutContainer() {
    const btnStyles = {
        minWidth: '40px',
        maxWidth: '150px',
        maxHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '1rem',
        color: 'black',
        borderRadius: '4px',
        border: 'none',
        boxShadow: '-1px 1px 7px 5px #eee;',
        '&:hover': {
            border: 'none',
        },
    }
    return (
        <React.Fragment>
            <Typography
                sx={{
                    fontWeight: 'bold',
                }}
            >
                For which outlet do you want to manage prepared items
            </Typography>
            <Divider />
            <br />
            <Stack direction="row">
                <Button
                    variant="outlined"
                    startIcon={<AddOutlined />}
                    sx={btnStyles}
                >
                    Bake My Day Entebbe
                </Button>
                <Button
                    startIcon={<AddOutlined />}
                    variant="outlined"
                    sx={btnStyles}
                >
                    Bake My Day Ntinda
                </Button>
            </Stack>
        </React.Fragment>
    )
}
