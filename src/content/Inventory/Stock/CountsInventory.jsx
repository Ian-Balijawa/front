import {faEye, faPager} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import GPActionLinks from '../../../components/GPActionLinks'
import GPLayout from '../../../components/GPLayout'
import {GPSearchFilterCardStock} from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import GPIconButton from '../../../components/GPBlockButton'
import GPSelectInput from '../../../components/GPSelectInput.js/GPSelectInput'
import CountsTable from '../Counts/CountsTable'

function CountsInventory() {
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
        {title: 'Current stock Qty.', field: 'Current_stock_Qty'},
        {title: 'count', field: 'count'},
        {title: 'Count Total', field: 'count_total'},
        {title: 'Storage Location', field: 'storage_location'},
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
            Current_stock_Qty: 'Nic&Nico Suppliers',
            count: 'Dry Food',
            count_total: 0,
            storage_location: 0,
        },
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            Current_stock_Qty: 'Nic&Nico Suppliers',
            count: 'Dry Food',
            count_total: 0,
            storage_location: 0,
        },
        {
            name: '001',
            package_size: '600128393',
            stock_value: 'Rice',
            Current_stock_Qty: 'Nic&Nico Suppliers',
            count: 'Dry Food',
            count_total: 0,
            storage_location: 0,
        },
    ]

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center border-bottom">
                <GPIconButton
                    title="Save Changes"
                    gpClassName="cBtn px-4 py-2 bg-theme border-0 "
                />

                <GPSelectInput
                    placeholder="More"
                    className="select-input"
                    arrayOfData={['Reset Count', 'Cancel Count']}
                    style={{
                        marginLeft: '1rem',
                        height: '2.5rem',
                    }}
                />
            </div>

            <GPSearchFilterCardStock />

            <div className="card card-main mt-4">
                <CountsTable />
            </div>
        </GPLayout>
    )
}

export default CountsInventory
