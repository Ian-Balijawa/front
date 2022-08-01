import {
    TextField,
    Typography,
    Stack,
    Box,
    Paper,
    Grid,
    FormControl
} from '@mui/material'
import {styled} from '@mui/material/styles'
import {SelectField} from '../components'

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function General() {
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
                <Grid item xs={4}>
                    <Stack spacing={4} direction="column">
                        <Stack spacing={2} direction="row">
                            <Typography paragraph>Category Type</Typography>
                            <SelectField
                                id="outlined-basic"
                                variant="outlined"
                                label="----------------"
                            />
                        </Stack>
                        <Stack spacing={10} direction="row">
                            <Typography paragraph>Class</Typography>
                            <SelectField
                                id="outlined-basic"
                                variant="outlined"
                                label="----------------"
                            />
                        </Stack>
                        <Stack spacing={10} direction="row">
                            <Typography paragraph>Stage</Typography>
                            <SelectField
                                id="outlined-basic"
                                variant="outlined"
                                label="----------------"
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
        </Box>
    )
}
