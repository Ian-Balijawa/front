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
import {tabPanelSx} from '../constants/tab-styles'

export default function FinancialContainer() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Grid container spacing={3} sx={tabPanelSx}>
                <Grid item xs={4}>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>EAN/UPC</Typography>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Barcode"
                            />
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>System ID</Typography>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder=""
                            />
                        </Stack>
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>Custom ID </Typography>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Custom ID"
                            />
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={4}>
                    <Stack spacing={2} direction="column">
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
                                sx={{
                                    width: '10rem',
                                    marginTop: '-1rem',
                                }}
                                id="outlined-basic"
                                variant="outlined"
                                label="None"
                            />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>Category Type</Typography>
                            <SelectField
                                sx={{
                                    width: '10rem',
                                    marginTop: '-1rem',
                                }}
                                id="outlined-basic"
                                variant="outlined"
                                label="None"
                            />
                        </Stack>
                        <Stack spacing={10} direction="row">
                            <Typography paragraph>Class</Typography>
                            <SelectField
                                sx={{
                                    width: '10rem',
                                    marginTop: '-1rem',
                                }}
                                id="outlined-basic"
                                variant="outlined"
                                label="None"
                            />
                        </Stack>
                        <Stack spacing={10} direction="row">
                            <Typography paragraph>Stage</Typography>
                            <SelectField
                                sx={{
                                    width: '10rem',
                                    marginTop: '-1rem',
                                }}
                                id="outlined-basic"
                                variant="outlined"
                                label="None"
                            />
                        </Stack>
                    </Stack>
                </Grid>

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
