import {
    TextField,
    Typography,
    Stack,
    Box,
    Grid,
    FormControlLabel,
    FormGroup,
    Checkbox,
} from '@mui/material'
import {IngredientsContainer} from '.'
import {tabPanelSx} from '../constants/tab-styles'

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
            <Grid container spacing={3} sx={tabPanelSx}>
                <Grid item xs={4}>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={2} direction="row">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="This is a semi-finished produtct"
                                />
                                <Typography
                                    paragraph
                                    marginLeft="2rem"
                                    fontWeight="light"
                                >
                                    When checked, the recipe can be used as a
                                    sub recipe in other recipes{' '}
                                </Typography>
                            </FormGroup>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={3}>
                    <Stack spacing={1} direction="column">
                        <Typography paragraph sx={{marginBottom: '0.5rem'}}>
                            #Portions(Required)
                        </Typography>
                        <TextField
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                        />
                        <Typography>
                            Number of portions or servings this recipe is
                            designed for
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={4}>
                    <Stack spacing={2} direction="column">
                        <Stack spacing={1}>
                            <Typography
                                paragraph
                                fontWeight="bold"
                                sx={{marginBottom: '0.5rem'}}
                            >
                                Net measurement Info (Required)
                            </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="I want to enter weight and volume manually"
                                />
                            </FormGroup>
                        </Stack>
                        <Stack spacing={1} direction="column">
                            <Typography>Weight</Typography>
                            <Stack spacing={1} direction="row">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="100,000..."
                                />
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="g,Kg,..."
                                />
                            </Stack>
                        </Stack>

                        <Stack spacing={1} direction="column">
                            <Typography>Volume</Typography>
                            <Stack spacing={1} direction="row">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="100,000..."
                                />
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="ml,ltr,..."
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <IngredientsContainer />
        </Box>
    )
}
