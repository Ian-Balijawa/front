import {
    TextField,
    Typography,
    Stack,
    Box,
    Grid,
    FormControl,
} from '@mui/material'
import {IngredientsContainer} from '.'
import {SelectField} from '../components'

export default function PortioningContainer() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Stack spacing={4} direction="column">
                        <Stack spacing={3.5} direction="row">
                            <Typography paragraph>Cuisine</Typography>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="E.g. French, Indian,Italian..."
                            />
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>Shell Life</Typography>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Number of Days"
                            />
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>Difficulty</Typography>
                            <SelectField
                                id="outlined-basic"
                                variant="outlined"
                                label="----------------"
                            />
                        </Stack>
                    </Stack>
                </Grid>
                l{' '}
                <Grid item xs={8}>
                    <Stack spacing={2} direction="row">
                        <Typography paragraph>Extra Information</Typography>
                        <FormControl fullWidth sx={{m: 1}}>
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </Stack>
                </Grid>
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
