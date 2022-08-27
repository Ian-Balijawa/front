import {faEye, faPager, faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import GPActionLinks from '../../../components/GPActionLinks'
import GPLayout from '../../../components/GPLayout'
import {GPSearchFilterCardStock} from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import GPCustomTable from '../../../components/GPCustomTable'
import StatusCard, {StatusCardWrapper} from './StatusCards'

function InventoryStockDashboard() {
    const crumbs = [
        {
            text: 'Inventory',
            href: '/inventory',
        },
        {
            text: 'Ingredients',
            href: '#',
        },
    ]
    const actionLinks = [
        {
            text: 'Edit',
            icon: 'faPen',
            href: '',
        },
        {
            text: 'Delete',
            icon: 'faTrashCan',
            href: '',
        },
    ]
    const navigate = useNavigate()

    const _columns = [
        {title: 'Product Name', field: 'name'},
        {title: 'Package size', field: 'package_size'},
        {title: 'Stock  Value', field: 'stock_value'},
        {title: 'Par', field: 'par'},
        {title: 'Min. Stock', field: 'min_stock'},
        {title: 'Stock', field: 'stock'},
        {
            title: 'Actions',
            field: 'actions',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <div className="supplier-action-view-btn-cont">
                        <div className="view-btn-action">
                            <FontAwesomeIcon
                                icon={faEye}
                                style={{color: '#fff'}}
                            />
                            View
                        </div>
                    </div>
                    <GPActionLinks actionLinks={actionLinks} record={rowData} />
                </div>
            ),
        },
    ]

    const _data = [
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            par: 'Nic&Nico Suppliers',
            min_stock: 'Dry Food',
            stock: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            par: 'Nic&Nico Suppliers',
            min_stock: 'Dry Food',
            stock: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            par: 'Nic&Nico Suppliers',
            min_stock: 'Dry Food',
            stock: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            par: 'Nic&Nico Suppliers',
            min_stock: 'Dry Food',
            stock: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
    ]

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <StatusCardWrapper>
                {[
                    {
                        statusText: 'Positive stock',
                        value: 0,
                        id: '1',
                    },
                    {
                        statusText: 'Negative stock',
                        value: 0,
                        id: '2',
                    },
                    {
                        statusText: 'Below Minimum',
                        value: 0,
                        id: '3',
                    },
                    {
                        statusText: 'Below Spar',
                        value: 0,
                        id: '4',
                    },
                    {
                        statusText: 'Stock value',
                        value: 'UShs 0',
                        id: '5',
                    },
                ].map(status => (
                    <StatusCard
                        status={status.statusText}
                        key={status.id}
                        value={status.value}
                    />
                ))}
            </StatusCardWrapper>
            <GPSearchFilterCardStock />

            <div className="card card-main mt-4">
                <GPCustomTable columns={_columns} data={_data} />
            </div>
        </GPLayout>
    )
}

export default InventoryStockDashboard
