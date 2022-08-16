import React from 'react'
import GPCartButton from '../../../components/GPCartButton/GPCartButton'
import GPLayout from '../../../components/GPLayout'
import GPSearchFilterCard from '../../../components/GPSearchFilterCard/GPSearchFilterCard'

import '../inventory.css'

const Orders = () => {
    return (
        <GPLayout>
            <div className='orders-main'>

                <div className='order-cart-button-container'>
                     <GPCartButton
                        onClick={()=> alert("cart")}
                      />
                </div>

                <div className='order-search-container'>
                     <GPSearchFilterCard />
                </div>

                <div className='order-table-container'>

                </div>

            </div>
        </GPLayout>
    )
}

export default Orders