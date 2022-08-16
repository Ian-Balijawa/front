import React, { useState } from 'react'
import GPCartButton from '../../../components/GPCartButton/GPCartButton'
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../../components/GPLayout'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'

import '../inventory.css'
import OrderModal from './OrderModal'


const Orders = () => {


    const [showModal, setShowModal] = useState(false)


    return (
        <GPLayout>
            <div className='orders-main'>

                <div className='order-cart-button-container'>
                    <GPCartButton
                        onClick={() => setShowModal(true)}
                    />
                </div>

                <div className='order-search-container'>
                    <GPSearchFilterCard />
                </div>

                <div className='order-table-container'>
                    <GPCustomTable />
                </div>


                {/* order modal */}

                <OrderModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                />


            </div>
        </GPLayout>
    )
}

export default Orders