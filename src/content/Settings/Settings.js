import React from 'react'
import GPLayout from '../../components/GPLayout'
import {faGear} from '@fortawesome/free-solid-svg-icons'

function Settings() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Settings',
            href: '/settings',
        },
    ]
    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Settings</h1>
                </div>
                Settings
            </main>
        </GPLayout>
    )
}

export default Settings
