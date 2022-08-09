import React from 'react'
import GPLayout from '../../../components/GPLayout'
import {
    faGear,
    faPlus,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPSearchInput from '../../../components/GPSearchInput'
import GPImportExportButton from '../../../components/GPImportExportButton'

function EmployeeSetup() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Settings',
            href: '/settings',
        },
        {
            text: 'EmployeeSetup',
            href: '/employee-setup',
        },
    ]
    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mx-5 border-bottom">
                    <h1 className="h2"></h1>
                    <GPSearchInput />
                    <GPIconButton
                        icon={faPlus}
                        title="New Employee Role"
                        classes="border-0 bg-transparent text-theme fs-5"
                    />
                </div>
                <p>EmployeeSetup</p>
                <GPImportExportButton />
            </main>
        </GPLayout>
    )
}

export default EmployeeSetup
