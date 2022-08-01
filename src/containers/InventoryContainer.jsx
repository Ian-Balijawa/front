import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

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
        </Box>
    )
}
