import React from 'react'
import GPLayout from '../../components/GPLayout'
import {faPager} from '@fortawesome/free-solid-svg-icons'

function Reports() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Reports',
            href: '/reports',
        },
    ]
    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Reports</h1>
                </div>
                Reports
            </main>
        </GPLayout>
    )
}

export default Reports
