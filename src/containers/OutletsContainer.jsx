import {
    Typography,
    Stack,
    Box,
    Grid,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import {IngredientsContainer} from '.'
import {tabPanelSx} from '../constants/tab-styles'

export default function OutletsContainer() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Grid container spacing={1} sx={tabPanelSx}>
                <Stack spacing={2} direction="column" sx={{padding: '2rem'}}>
                    <Typography
                        paragraph
                        sx={{marginBottom: '-.6rem', fontWeight: 'bold'}}
                    >
                        Select outlet in which this Recipe will be accessible
                        and active
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Bake My Day Entebbe "
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Bake My Day Ntinda"
                            />
                        </FormGroup>
                    </Stack>
                </Stack>
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
