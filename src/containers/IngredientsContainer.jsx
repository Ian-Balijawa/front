import React from 'react'
import {Box, Typography, Stack, TextField} from '@mui/material'
import {tabPanelSx} from '../constants/tab-styles'
import {AddOutlined} from '@mui/icons-material'

export default function IngredientContainer() {
    return (
        <>
            <IngredientsTable />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

function createData(
    ingredientOrRecipe,
    netQty,
    unit,
    prepWaste,
    remarks,
    actions
) {
    return {ingredientOrRecipe, netQty, unit, prepWaste, remarks, actions}
}

const rows = [
    createData(
        '',
        1,
        'Piecies',
        'Waste',
        'Cut into small Piecies',
        'expand',
        'delete',
        {
            expand: 'expand',
            delete: 'delete',
        }
    ),
    createData('', 1, 'Piecies', 'Waste', 'Remarks', {
        expand: 'expand',
        delete: 'delete',
    }),
]

function IngredientsTable() {
    return (
        <Box
            direction="column"
            sx={{marginLeft: '-1.3em', padding: '1em', ...tabPanelSx}}
        >
            <Typography>Ingredients</Typography>
            <Header />
            <TableRow />
        </Box>
    )
}

const Header = () => {
    return (
        <Stack direction="row" spacing={2} sx={{marginLeft: '2rem'}}>
            <Stack width={'40%'}>
                <Typography>[I]Ingredient or [R]Recipe name</Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={5}
                sx={{width: '30%', marginLeft: '2em'}}
            >
                <Typography>Net Qty.</Typography>
                <Typography>Unit</Typography>
                <Typography>Prep Waste %</Typography>
            </Stack>
            <Stack
                direction={'row'}
                spacing={2}
                sx={{justifyContent: 'space-evenly', width: '30%'}}
            >
                <Typography>Remarks</Typography>
                <Stack direction="row">
                    <Typography>Actions</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

const TableRow = ({netQty, unit, prepWaste, remarks, actions}) => {
    return (
        <Stack direction="row" spacing={2} sx={{marginTop: '1em'}}>
            <Stack sx={{width: '50%'}}>
                <TextField size="small" disabled />
            </Stack>
            <TextField size="small" sx={{width: '7rem'}} placeholder={netQty} />
            <TextField size="small" sx={{width: '7rem'}} placeholder={unit} />
            <TextField
                size="small"
                sx={{width: '7rem'}}
                placeholder={prepWaste}
            />
            <Stack
                direction={'row'}
                spacing={2}
                sx={{justifyContent: 'space-evenly', width: '30%'}}
            >
                <TextField
                    size="small"
                    sx={{width: '6rem'}}
                    placeholder={remarks}
                />
                <Stack direction="row">
                    <AddOutlined />
                    <AddOutlined />
                </Stack>
            </Stack>
        </Stack>
    )
}
