import React from 'react'
import {Box, Typography} from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {tabPanelSx} from '../constants/tab-styles'

export default function IngredientContainer() {
    return (
        <Box sx={{tabPanelSx}}>
            <Typography>Ingredients</Typography>
            <IngredientsTable />
        </Box>
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
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{
                            background: '',
                        }}
                    >
                        <TableCell>[I] Ingredient or [R] Recipe</TableCell>
                        <TableCell align="right">NetQty</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Prep Waste %</TableCell>
                        <TableCell align="right">Remarks</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody
                    sx={{
                        border: 'none',
                    }}
                >
                    {rows.map(row => (
                        <TableRow
                            key={row.name}
                            sx={{
                                padding: 0,
                                border: 'none',
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <input
                                    placeholder={row.ingredientOrRecipe}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    placeholder={row.netQty}
                                    style={{
                                        width: '5rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    placeholder={row.prepWaste}
                                    style={{
                                        width: '5rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    placeholder={row.unit}
                                    style={{
                                        width: '5rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    placeholder={row.remarks}
                                    style={{
                                        width: '5rem',
                                    }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <input
                                    placeholder={row.actions}
                                    style={{
                                        width: '5rem',
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
