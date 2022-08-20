import React, {forwardRef} from 'react'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import GPPagination from '../GPPagination/GPPagination'
import './gp-table.css'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

const GPTable = ({
    title,
    gppagination = true, //boolean value for showing pagination
    toolbar = true,
    data,
    columns,
    actions,
    options,
    tableTitle = '',
    ...props
}) => {
    return (
        <>
            {/* <GPPagination/> */}

            <MaterialTable
                icons={tableIcons}
                title={gppagination ? <GPPagination /> : tableTitle}
                columns={columns}
                data={data}
                actions={actions}
                options={{
                    headerStyle: {
                        backgroundColor: '#FFE5DC',
                        height: '40px !important',
                        paddingBottom: '0px',
                        paddingTop: '0px',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#000',
                        borderBottom: '1px solid #000',
                        ...props.headerStyle,
                    },
                    cellStyle: {
                        borderBottom: '1px solid #7a7a7a',
                        height: '40px !important',
                        fontSize: '14px',
                        paddingBottom: '0px',
                        paddingTop: '0px',
                        ...props.cellStyle,
                    },
                    rowStyle: (rowData, index) => ({
                        backgroundColor:
                            index % 2 === 0
                                ? '#ffffff'
                                : 'rgba(227, 227, 227, 0.6)',
                    }),

                    search: false,
                    toolbar: toolbar,
                    paging: false,
                    ...options,
                }}
                style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                }}
                {...props}
            />
        </>
    )
}

export default GPTable
