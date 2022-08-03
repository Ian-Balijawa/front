import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {IngredientsContainer} from '.'
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import {tabPanelSx} from '../constants/tab-styles'

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
            <Grid container spacing={3} sx={tabPanelSx}>
                <Grid item xs={4}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Set Recipe Stockable"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
