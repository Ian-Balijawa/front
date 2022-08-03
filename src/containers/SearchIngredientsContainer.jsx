import {
    TextField,
    Stack,
    Button,
    Divider,
    ButtonGroup,
    FormGroup,
    FormControlLabel,
    Checkbox,
    AppBar,
    Toolbar,
    Typography,
    Box,
    CssBaseline,
} from '@mui/material'
import * as React from 'react'
import {ContentPasteGo, AddOutlined} from '@mui/icons-material'
import {BreadCrumbs, SideBar, SelectField} from '../components'
import {tabPanelSx} from '../constants/tab-styles'
import {DataGrid} from '@mui/x-data-grid'

export default function SearchIngredientsContainer() {
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

            <DataTable />
        </React.Fragment>
    )
}

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'ean', headerName: 'EAN/UPC', width: 130},
    {field: 'supplier', headerName: 'Supplier', width: 130},
    {
        field: 'accountingCategory',
        headerName: 'Accounting Category',
        width: 90,
    },
    {
        field: 'Category',
        headerName: 'Category',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: 160,
        valueGetter: params =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'Pricing',
        headerName: 'Pricing',
        width: 90,
    },
    {
        field: 'Usage',
        headerName: 'Usage',
        width: 90,
    },
    {
        field: 'Modified',
        headerName: 'Modified',
        width: 90,
    },
]

const rows = [
    {id: 1, ean: 'Snow', supplier: 'Jon', accountingCategory: 35},
    {id: 2, ean: 'Lannister', supplier: 'Cersei', accountingCategory: 42},
    {id: 3, ean: 'Lannister', supplier: 'Jaime', accountingCategory: 45},
    {id: 4, ean: 'Stark', supplier: 'Arya', accountingCategory: 16},
    {id: 5, ean: 'Targaryen', supplier: 'Daenerys', accountingCategory: null},
    {id: 6, ean: 'Melisandre', supplier: null, accountingCategory: 150},
    {id: 7, ean: 'Clifford', supplier: 'Ferrara', accountingCategory: 44},
    {id: 8, ean: 'Frances', supplier: 'Rossini', accountingCategory: 36},
    {id: 9, ean: 'Roxie', supplier: 'Harvey', accountingCategory: 65},
]

function DataTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
