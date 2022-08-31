import React, {useState} from 'react'
import CustomCountButton from '../../../components/CustomCountButton/CustomCountButton'
import GPCustomTable from '../../../components/GPCustomTable'

const CountsTable = () => {
    const _columns = [
        {title: 'Product Name', field: 'name'},
        {title: 'Package size', field: 'package_size'},
        {title: 'Current stock Qty.', field: 'Current_stock_Qty'},
        {
            title: 'Count',
            field: 'count',
            render: rowData => <CustomCountButton record={rowData} />,
        },
        {title: 'Count Total', field: 'count_total'},
        {title: 'Storage Location', field: 'storage_location'},
    ]

    const _data = [
        {
            name: 'Avocado',
            package_size: '',
            Current_stock_Qty: '',
            count: '',
            count_total: '',
            storage_location: '',
        },
        {
            name: '001',
            package_size: 'single piece (100 g)',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },

        {
            name: 'Home made lemon mayonnaise',
            package_size: '',
            Current_stock_Qty: '',
            count: '',
            count_total: '',
            storage_location: '',
        },
        {
            name: '001',
            package_size: 'single piece (100 g)',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: '001',
            package_size: 'single piece (100 g)',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: 'Lemon Juice',
            package_size: '',
            Current_stock_Qty: '',
            count: '',
            count_total: '',
            storage_location: '',
        },
        {
            name: '001',
            package_size: 'single piece (100 g)',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: '001',
            package_size: 'single piece (100 g)',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
    ]

    return <GPCustomTable columns={_columns} data={_data} />
}

export default CountsTable
