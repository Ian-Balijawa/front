import {Stack, Button, Divider, Typography} from '@mui/material'
import * as React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import {AddOutlined} from '@mui/icons-material'

export default function PreparationsContainer() {
    const btnStyles = {
        minWidth: '40px',
        maxWidth: '150px',
        maxHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '1rem',
        color: 'black',
        borderRadius: '4px',
        border: 'none',
        boxShadow: '-1px 1px 7px 5px #eee;',
        '&:hover': {
            border: 'none',
        },
    }
    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-between">
                <Typography
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Creation events from Bake My Day Entebbe
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<AddOutlined />}
                    sx={{marginBottom: '1rem'}}
                >
                    {' '}
                    Record Collection
                </Button>
            </Stack>
            <Divider />
            <br />

            <DataTable />
        </React.Fragment>
    )
}

const columns = [
    {field: 'status', headerName: 'Status', width: 100},
    {field: 'createdBy', headerName: 'Created By', width: 130},
    {field: 'sentOrOwn', headerName: 'Sent/owned by', width: 130},
    {
        field: 'started',
        headerName: 'Started on',
        width: 120,
    },
    {
        field: 'ended',
        headerName: 'Ended on',
        sortable: true,
        width: 160,
    },
    {
        field: 'stockChange',
        headerName: 'Stock Change',
        width: 130,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
    },
    {
        field: 'remove',
        headerName: 'Remove',
        width: 120,
    },
]

const rows = []

function DataTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}
