import React, {useState} from 'react'
import GPCard from '../../../components/GPCard/GPCard'
import GPCartButton from '../../../components/GPCartButton/GPCartButton'
import GPLayout from '../../../components/GPLayout'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'
import AllOrdersTable from '../../../components/GPTables/Inventory/AllOrdersTable'

import '../inventory.css'
import OrderModal from './OrderModal'

const Orders = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <GPLayout>
            <div className="orders-main">
                <div className="order-cart-button-container">
                    <GPCartButton onClick={() => setShowModal(true)} />
                </div>

                <div className="order-search-container">
                    <GPSearchFilterCard />
                </div>

                <div className="order-table-container">
                    <GPCard classes="order-table-card">
                        <AllOrdersTable />
                    </GPCard>
                </div>

                <OrderModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                />
            </div>
        </GPLayout>
    )
}

export default Orders
