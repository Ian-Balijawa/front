import {TextField, Typography, Stack, Box, Grid} from '@mui/material'
import {IngredientsContainer} from '.'
import {tabPanelSx} from '../constants/tab-styles'

export default function ProductionContainer() {
    const productions = [
        {
            topText: 'Production Prep Time',
            bottomText: ' Preparation time for 1 Portion',
        },
        {
            topText: 'Production Cooking time',
            bottomText: 'Cooking time for 1 Portion',
        },
        {topText: 'Plating time', bottomText: 'Plating time for 1 Portion'},
    ]

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
                {productions.map((production, index) => (
                    <Grid item xs={4} key={index}>
                        <Stack spacing={2} direction="column">
                            <Stack spacing={1} direction="column">
                                <Typography sx={{fontWeight: 'light'}}>
                                    {production.topText}
                                </Typography>
                                <Stack spacing={1} direction="row">
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        variant="outlined"
                                        placeholder="mins"
                                    />
                                    <TextField
                                        size="small"
                                        id="outlined-basic"
                                        variant="outlined"
                                        placeholder="secs"
                                    />
                                </Stack>
                                <Typography sx={{fontWeight: 'light'}}>
                                    {production.bottomText}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
