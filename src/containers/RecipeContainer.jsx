import React from 'react'
import {Typography, Button, TextField, Stack} from '@mui/material'
import {RecipeTabContextOperations} from '../components'

export default function RecipeContainer() {
    return (
        <React.Fragment>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Save Changes</Button>
                <Button variant="outlined">Save & start New </Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
                <Typography paragraph>Create a new Recipe</Typography>
                <TextField
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                />
            </Stack>
            <br />
            <RecipeTabContextOperations />
        </React.Fragment>
    )
}
