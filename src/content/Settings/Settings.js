import React from 'react'
import GPLayout from '../../components/GPLayout'
import {
    faBook,
    faGear,
    faPersonCirclePlus,
    faUserLock,
    faBookAtlas,
    faBookMedical,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './settings.css'
import {Link, useNavigate} from 'react-router-dom'
import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'

function Settings() {
    const crumbs = [
        {
            text: 'Settings',
            href: '/settings',
        },
    ]

    const navigate = useNavigate()
    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Settings</h1>
                </div> */}

            <div className="row mb-4">
                <GPDashTitle gpTitle={'General'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        gpIcon={faBook}
                        gpTitle={'Library settings'}
                        gpLink={'/library'}
                    />

                    <GPDashCard
                        gpIcon={faPersonCirclePlus}
                        gpTitle={'Employee Setup'}
                        gpLink={'/employee-setup'}
                        gpClassName={'mx-4'}
                    />
                    <GPDashCard
                        gpIcon={faUserLock}
                        gpTitle={'Employee  Roles'}
                        gpLink={'/employee-role'}
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
