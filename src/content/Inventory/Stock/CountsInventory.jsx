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
import CustomCountButton from '../../../components/CustomCountButton/CustomCountButton'

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

    const _columns = [
        {title: 'Product Name', field: 'name'},
        {title: 'Package size', field: 'package_size'},
        {title: 'Current stock Qty.', field: 'Current_stock_Qty'},
        {
            title: 'Count',
            field: 'count',
            render: rowData =>
                !['Avocado', 'lemon', 'Juice'].includes(rowData.name) ? (
                    <CustomCountButton record={rowData} />
                ) : null,
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
            package_size: 'piece',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },

        {
            name: 'lemon',
            package_size: '',
            Current_stock_Qty: '',
            count: '',
            count_total: '',
            storage_location: '',
        },
        {
            name: '001',
            package_size: 'piece',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: '001',
            package_size: 'piece',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: 'Juice',
            package_size: '',
            Current_stock_Qty: '',
            count: '',
            count_total: '',
            storage_location: '',
        },
        {
            name: '001',
            package_size: 'piece',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
        },
        {
            name: '001',
            package_size: 'piece',
            Current_stock_Qty: '1',
            count: 'Dry Food',
            count_total: 'N/A',
            storage_location: "k'la",
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
                <CountsTable data={_data} columns={_columns} />
            </div>
        </GPLayout>
    )
}

export default CountsInventory
