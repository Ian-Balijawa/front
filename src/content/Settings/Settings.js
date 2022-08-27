import React from 'react'
import GPLayout from '../../components/GPLayout'
import {
    faBook,
    faGear,
    faPersonCirclePlus,
    faUserLock,
    faBookMedical,
} from '@fortawesome/free-solid-svg-icons'
import './settings.css'
import {useNavigate} from 'react-router-dom'
import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'

function Settings() {
    const crumbs = [
        {
            text: 'Settings',
            href: '#',
        },
    ]

    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <div className="row mb-4">
                <GPDashTitle gpTitle={'General'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        gpIcon={faBook}
                        gpTitle={'Library settings'}
                        gpLink={'/settings/library'}
                    />

                    <GPDashCard
                        gpIcon={faPersonCirclePlus}
                        gpTitle={'Employee Setup'}
                        gpLink={'/settings/employee-setup'}
                        gpClassName={'mx-4'}
                    />
                    <GPDashCard
                        gpIcon={faUserLock}
                        gpTitle={'Employee  Roles'}
                        gpLink={'/settings/employee-role'}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <GPDashTitle gpTitle={'Outlet'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        gpIcon={faBookMedical}
                        gpTitle={'Outlet Setup'}
                        gpLink={'/outlet-setup'}
                    />

                    <GPDashCard
                        gpIcon={faPersonCirclePlus}
                        gpTitle={'Add  Outlet'}
                        gpLink={'/new-outlet'}
                        gpClassName={'mx-4'}
                    />
                </div>
            </div>
        </GPLayout>
    )
}

export default Settings
