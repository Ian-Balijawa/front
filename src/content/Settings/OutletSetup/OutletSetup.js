import React from 'react'
import GPLayout from '../../../components/GPLayout'
import {
    faBars,
    faGrinBeamSweat,
    faPager,
    faPenToSquare,
    faPlus,
    faUserPen,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import './outlet-setup.css'
import OutletCard from './OutletCard'
import {useNavigate} from 'react-router-dom'

function OutletSetup() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Outlets',
            href: '#',
        },
    ]

    const gpList = [
        {
            name: 'Bake My Day Entebbe ',
            items: [
                {
                    title: 'Manage Menus',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'Manage Recipes',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'View Outlet Dashboard',
                    icon: faGrinBeamSweat,
                    href: '/',
                },

                {
                    title: 'Edit Outlet Settings',
                    icon: faPenToSquare,
                    href: '/',
                },
                {
                    title: 'Edit Outlet Users',
                    icon: faUserPen,
                    href: '/',
                },
            ],
        },
        {
            name: 'Bake My Day Ntinda',
            items: [
                {
                    title: 'Manage Menus',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'Manage Recipes',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'View Outlet Dashboard',
                    icon: faGrinBeamSweat,
                    href: '/',
                },

                {
                    title: 'Edit Outlet Settings',
                    icon: faPenToSquare,
                    href: '/',
                },
                {
                    title: 'Edit Outlet Users',
                    icon: faUserPen,
                    href: '/',
                },
            ],
        },

        {
            name: 'Bake My Day Ntinda',
            items: [
                {
                    title: 'Manage Menus',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'Manage Recipes',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'View Outlet Dashboard',
                    icon: faGrinBeamSweat,
                    href: '/',
                },

                {
                    title: 'Edit Outlet Settings',
                    icon: faPenToSquare,
                    href: '/',
                },
                {
                    title: 'Edit Outlet Users',
                    icon: faUserPen,
                    href: '/',
                },
            ],
        },

        {
            name: 'Bake My Day Ntinda',
            items: [
                {
                    title: 'Manage Menus',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'Manage Recipes',
                    icon: faBars,
                    href: '/',
                },

                {
                    title: 'View Outlet Dashboard',
                    icon: faGrinBeamSweat,
                    href: '/',
                },

                {
                    title: 'Edit Outlet Settings',
                    icon: faPenToSquare,
                    href: '/',
                },
                {
                    title: 'Edit Outlet Users',
                    icon: faUserPen,
                    href: '/',
                },
            ],
        },
    ]

    const navigate = useNavigate()

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div className="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-1 py-4 mb-3 border-bottom">
                {/* <h1 className="h2">OutletSetup</h1> */}

                <GPIconButton
                    icon={faPlus}
                    onClick={() => {
                        navigate('/new-outlet')
                    }}
                    title="Add New Outlet"
                    gpClassName="cBtn bg-transparent text-theme "
                />
            </div>
            <span className="dash-title">Outlet Management</span>
            <p className="dash-sub-title">
                Select an outlet to view and manage its content
            </p>
            <div className="mt-5  dash-card-container">
                {gpList.map((gp, index) => (
                    <div key={index} className="card dash-card">
                        <OutletCard title={gp.name} gpList={gp.items} />
                    </div>
                ))}
            </div>
        </GPLayout>
    )
}

export default OutletSetup
