import {faEye, faPager, faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import GPLayout from '../../../components/GPLayout'
import GPIconButton from '../../../components/GPBlockButton'
import GPSelectInput from '../../../components/GPSelectInput.js/GPSelectInput'
import GPCustomTable from '../../../components/GPCustomTable'
import CustomPlusIconButton from '../../../components/CustomPlusIconButton'
import {GPModalInventory} from '../../../components/GPModal/GPModal'
import GPTable from '../../../components/GPTable'

function CountsEventsNtinda() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
        {title: 'Event#', field: 'event'},
        {title: 'Description', field: 'description'},
        {title: 'Started by', field: 'started_by'},
        {title: 'Started on', field: 'started_on'},
        {title: 'Status', field: 'status'},
        {title: 'Items', field: 'items'},
        {
            title: 'Actions',
            field: 'actions',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <div className="supplier-action-view-btn-cont d-flex flex-row">
                        <div
                            style={{
                                marginRight: '1rem',
                                color: '#00000',
                                marginRight: '1rem',
                                border: '1px solid #7A7A7A',
                                padding: '3px',
                                borderRadius: '4px',
                            }}
                        >
                            <FontAwesomeIcon icon={faEye} style={{}} />
                            View
                        </div>
                        <div
                            style={{
                                color: '#00000',
                                border: '1px solid #7A7A7A',
                                padding: '3px',
                                borderRadius: '4px',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{color: '#00000'}}
                            />
                            Remove
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    const _data = [
        {
            event: '001',
            description: '600128393',
            started_by: 'Rice',
            started_on: 'Nic&Nico Suppliers',
            status: 'Dry Food',
            items: 0,
        },
        {
            event: '001',
            description: '600128393',
            started_by: 'Rice',
            started_on: 'Nic&Nico Suppliers',
            status: 'Dry Food',
            items: 0,
        },
        {
            event: '001',
            description: '600128393',
            started_by: 'Rice',
            started_on: 'Nic&Nico Suppliers',
            status: 'Dry Food',
            items: 0,
        },
    ]

    const _columnsModal = [
        {title: 'Stock Item', field: 'stock_item'},
        {title: 'Current Qty', field: 'current_qty'},
        {title: 'New Qty', field: 'new_qty'},
        {title: 'Current Value', field: 'current_value'},
    ]
    const _dataModal = [
        {
            stock_item: '001',
            current_qty: '600128393',
            new_qty: 'Rice',
            current_value: 'Nic&Nico Suppliers',
        },
        {
            stock_item: '001',
            current_qty: '600128393',
            new_qty: 'Rice',
            current_value: 'Nic&Nico Suppliers',
        },
        {
            stock_item: '001',
            current_qty: '600128393',
            new_qty: 'Rice',
            current_value: 'Nic&Nico Suppliers',
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

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <h2>Count Event from Bake my day Ntinda</h2>
                <h4>Count event started on July 23, 2022, 12:00 p.m.</h4>
                <p>
                    This count event is in progress. The changes to your
                    iventory will only be applied after you first save
                </p>

                <CustomPlusIconButton
                    style={{cursor: 'pointer'}}
                    title={'Start Partial Count'}
                    onClick={handleShow}
                />
            </div>

            <GPModalInventory
                handleClose={handleClose}
                onActionButtonClick={''}
                title={'Save Count Bake By Day Ntinda'}
                buttonText={'Cancel'}
                show={show}
                buttonTextSec={'Confirm Save'}
                size={'lg'}
            >
                <p style={{fontSize: '16px'}}>
                    The following changes will be applied to your inventory.
                    Please take a moment to review these alterations before
                    saving.
                </p>
                <GPTable
                    columns={_columnsModal}
                    data={_dataModal}
                    gppagination={true}
                    options={{toolbar: false}}
                    paddingBottom="5px"
                    paddingTop="5px"
                />
            </GPModalInventory>

            <div className="card card-main mt-4">
                <GPCustomTable columns={_columns} data={_data} />
            </div>
        </GPLayout>
    )
}

export default CountsEventsNtinda
