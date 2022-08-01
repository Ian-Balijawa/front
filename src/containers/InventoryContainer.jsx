import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {IngredientsContainer} from '.'

export default function InventoryContainer() {
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
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
