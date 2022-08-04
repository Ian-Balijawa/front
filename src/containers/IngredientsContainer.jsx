import React from 'react'
import {Box, Typography, Stack, TextField} from '@mui/material'
import {tabPanelSx} from '../constants/tab-styles'

export default function IngredientContainer() {
    return (
        <>
            <IngredientsTable />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
        <Stack direction="row" spacing={2}>
            <Stack width={'50%'}>
                <Typography>[I]Ingredient or [R]Recipe name</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Typography>Net Qty.</Typography>
                <Typography>Unit</Typography>
                <Typography>Prep Waste %</Typography>
            </Stack>
            <Stack
                direction={'row'}
                spacing={2}
                sx={{justifyContent: 'space-between', width: '25%'}}
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
            <Stack width={'50%'}>
                <TextField size="small" disabled />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField size="small" placeholder={netQty} />
                <TextField size="small" placeholder={unit} />
                <TextField size="small" placeholder={prepWaste} />
            </Stack>
            <Stack
                direction={'row'}
                spacing={2}
                sx={{justifyContent: 'space-between'}}
            >
                <TextField size="small" placeholder={remarks} />

                <Stack direction="row" spacing={2} width="50%">
                    <TextField size="small" placeholder={actions} />
                    <TextField size="small" placeholder={actions} />
                </Stack>
            </Stack>
        </Stack>
    )
}
