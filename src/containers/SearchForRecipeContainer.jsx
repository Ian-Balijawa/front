import {
    TextField,
    Typography,
    Stack,
    Box,
    Button,
    Divider,
    ButtonGroup,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import {SelectField} from '../components'
import {ContentPasteGo, AddOutlined} from '@mui/icons-material'
import * as React from 'react'
import {tabPanelSx} from '../constants/tab-styles'

export default function SearchForRecipeContainer() {
    const typographyStyles = {
        fontWeight: 'light',
        marginBottom: '-5px',
        marginTop: '10px',
        marginLeft: '10px',
    }
    return (
        <React.Fragment>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Stack
                    spacing={1}
                    direction="row"
                    justifyContent="space-between"
                >
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained">Save Changes</Button>
                        <ButtonGroup
                            disableElevation
                            variant="outlined"
                            sx={{background: '#E2EDF8', borderColor: '#E2EDF8'}}
                        >
                            <Button
                                variant="outlined"
                                startIcon={<ContentPasteGo />}
                                sx={{borderColor: '#7A7A7A'}}
                            >
                                Import
                            </Button>
                            <Button
                                startIcon={<ContentPasteGo />}
                                sx={{borderColor: '#7A7A7A'}}
                            >
                                Export
                            </Button>
                        </ButtonGroup>
                    </Stack>
                    <Button
                        startIcon={<AddOutlined />}
                        sx={{borderColor: '#7A7A7A'}}
                    >
                        Add New Recipe
                    </Button>
                </Stack>
                <br />
                <Divider />
                <br />
                <Stack direction="column" sx={tabPanelSx}>
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{margin: '0 1rem 0'}}
                    >
                        <Stack direction="column" sx={{width: '60%'}}>
                            <Typography paragraph sx={typographyStyles}>
                                Search for Recipes
                            </Typography>
                            <TextField
                                sx={{margin: '9px'}}
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Search"
                            />
                        </Stack>
                        <Stack direction="row">
                            <Stack direction="column" sx={{width: '12rem'}}>
                                <Typography paragraph sx={typographyStyles}>
                                    Category Type
                                </Typography>
                                <SelectField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="All"
                                />
                            </Stack>
                            <Stack direction="column" sx={{width: '12rem'}}>
                                <Typography paragraph sx={typographyStyles}>
                                    Stage
                                </Typography>
                                <SelectField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="All"
                                />
                            </Stack>
                        </Stack>

                        <Stack
                            direction="column"
                            sx={{position: 'relative', width: '10%'}}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                sx={{height: '3em', marginTop: '2.4rem'}}
                            >
                                Search{' '}
                            </Button>
                        </Stack>
                    </Stack>
                    <Divider />

                    <Stack
                        spacing={1}
                        direction="column"
                        sx={{margin: '0 auto', paddingLeft: '1em'}}
                    >
                        <Typography>Advanced Search</Typography>
                        <Stack spacing={1} direction="row">
                            <Stack direction="column" sx={{width: '18rem'}}>
                                <Typography paragraph sx={typographyStyles}>
                                    Season
                                </Typography>
                                <SelectField
                                    size="small"
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="All seasons"
                                />
                            </Stack>
                            <Stack direction="row">
                                <Stack direction="column" sx={{width: '18rem'}}>
                                    <Typography paragraph sx={typographyStyles}>
                                        Class
                                    </Typography>
                                    <SelectField
                                        size="small"
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="All Classes"
                                    />
                                </Stack>
                                <Stack direction="column" sx={{width: '18rem'}}>
                                    <Typography paragraph sx={typographyStyles}>
                                        Created By
                                    </Typography>
                                    <SelectField
                                        size="small"
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Category"
                                    />
                                </Stack>
                                <Stack
                                    direction="column"
                                    sx={{marginLeft: '1.5rem'}}
                                >
                                    <Typography paragraph sx={typographyStyles}>
                                        Show archived only
                                    </Typography>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                        />
                                    </FormGroup>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <br />
            </Box>

            <Box
                spacing={1}
                direction="row"
                sx={{
                    padding: '3rem',
                    margin: '1rem auto',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                <Stack direction="column" spacing={2}>
                    <Typography>No Recipes Found</Typography>
                    <Button variant="outlined" startIcon={<AddOutlined />}>
                        Add One Now
                    </Button>
                </Stack>
            </Box>
        </React.Fragment>
    )
}
