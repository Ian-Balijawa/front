import {
    faEllipsis,
    faEye,
    faPager,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import CustomGreenActionButton from '../../../components/CustomGreenActionButton'
import CustomOrderIncreamentAction from '../../../components/CustomOrderIncreamentAction'
import GPActionLinks from '../../../components/GPActionLinks'
import GPTable from '../../../components/GPTable'
import GPIconButton from '../../../components/GPIconButton'
import GPImportExportButton from '../../../components/GPImportExportButton'
import GPLayout from '../../../components/GPLayout'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import GPCustomTable from '../../../components/GPCustomTable'

function Ingredients() {
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
        {title: 'ID', field: 'id'},
        {title: 'EAN/UPC', field: 'code'},
        {title: 'Ingredient Name', field: 'ingredientName'},
        {title: 'Supplier', field: 'supplier'},
        {title: 'Accounting Category', field: 'accCategory'},
        {title: 'Category', field: 'category'},
        {title: 'Sub Category', field: 'subCategory'},
        {title: 'Date Added', field: 'dateAdded'},
        {
            title: 'Actions',
            field: 'ordering',
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
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },

        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
        {
            id: '001',
            code: '600128393',
            ingredientName: 'Rice',
            supplier: 'Nic&Nico Suppliers',
            accCategory: 'Dry Food',
            category: 0,
            subCategory: 0,
            dateAdded: '16/07/2022',
        },
    ]

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 py-4 mb-3 border-bottom">
                <GPImportExportButton />

                <GPIconButton
                    icon={faPlus}
                    onClick={() => {
                        navigate('/inventory/ingredients/new')
                    }}
                    title="Add New Ingredient"
                    gpClassName="cBtn bg-transparent text-theme "
                />
            </div>

            <div>
                <GPSearchFilterCard />
            </div>

            <div className="card card-main mt-4">
                <GPCustomTable
                    columns={_columns}
                    data={_data}
                    paddingBottom="0"
                    paddingTop="0"
                    options={{
                        selection: true,
                    }}
                />
            </div>
        </GPLayout>
    )
}

export default Ingredients
