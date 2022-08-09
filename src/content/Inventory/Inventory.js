import React from 'react'
import GPLayout from '../../components/GPLayout'
import {faFileInvoice} from '@fortawesome/free-solid-svg-icons'

function Inventory() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Inventory',
            href: '/inventory',
        },
    ]
    return (
        <GPLayout breadIcon={faFileInvoice} crumbs={crumbs}>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Inventory</h1>
                </div>
                Inventory
            </main>
        </GPLayout>
    )
}

export default Inventory
