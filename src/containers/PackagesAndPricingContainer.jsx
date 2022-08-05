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
import * as React from 'react'
import {tabPanelSx} from '../constants/tab-styles'

export default function PackagesAndPricingContainer() {
    return (
        <React.Fragment>
            <Grid
                container
                spacing={5}
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    boxShadow: '-1px 1px 7px 5px #eee;',
                    justifyContent: 'space-between',
                    marginTop: '-1rem',
                    marginLeft: '-1rem',
                    borderTop: 'none',
                    padding: '2rem',
                    borderRadius: '4px',
                }}
            >
                <Stack direction="column" sx={{width: '40%'}}>
                    <Typography paragraph>Package Information</Typography>
                    <TableHeader />
                    <PackagesSection />
                    <ConversionAndWaste />
                </Stack>

                <Stack spacing={2} direction="column" sx={{width: '50%'}}>
                    <Stack spacing={2} direction="colum">
                        <Typography paragraph>EAN/UPC</Typography>
                        <TextField
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Barcode"
                        />
                    </Stack>
                    <Stack spacing={2} direction="column">
                        <Typography paragraph>System ID</Typography>
                        <TextField
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                            placeholder=""
                        />
                    </Stack>
                </Stack>
            </Grid>
            <IngredientsContainer />
        </React.Fragment>
    )
}

const TableHeader = () => {
    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                borderBottom: '2px solid #000000',
                background: '#FFE5DC',
                margin: 'auto',
            }}
        >
            <Typography>Package Type</Typography>
            <Typography>Content</Typography>
            <Typography>Active</Typography>
            <Typography>Piece</Typography>
            <Typography>Avg Price</Typography>
            <Typography>UPC/EAN</Typography>
        </Stack>
    )
}

const PackagesSection = () => {
    const packagesList = []
    return (
        <Stack
            direction="columns"
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                borderBottom: '1px solid #000000',
                padding: '5px',
                width: '29.3em',
            }}
        >
            {packagesList.length === 0 && (
                <Typography sx={{margin: 'auto'}}>
                    No Packages linked to this Ingredient
                </Typography>
            )}
        </Stack>
    )
}

const ConversionAndWaste = () => {
    return (
        <Box sx={{width: '29.3em'}}>
            <Typography
                sx={{
                    marginTop: '1em',
                }}
            >
                Conversions & Waste
            </Typography>
            <hr />
            <Stack
                direction="columns"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: '5px',
                }}
            >
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{justifyContent: 'space-between', width: '100%'}}
                >
                    <Stack spacing={2}>
                        <Typography>Change Ratio Between Kg/L</Typography>
                        <Typography>1 KG = L</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography>Waste Percentage</Typography>
                        <Typography>1 KG = </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}
