import React from 'react'
import Logo from '../../assets/icons/LogoLight.svg'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {Link} from 'react-router-dom'

import GPBreadcrumb from '../GPBreadcrumb'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faChevronRight} from '@fortawesome/free-solid-svg-icons'

import './header.css'

function GPHeader({breadIcon, crumbs}) {
    return (
        <header className="navbar d-flex justify-content-start navbar-dark sticky-top bg-white flex-md-nowrap p-0 shadow">
            <Link
                className="navbar-brand bg-sidebar col-md-3 col-lg-2 me-0 px-3 fs-6"
                to="/"
            >
                <img src={Logo} width={220} className="p-2" alt="" />
            </Link>

            <button
                className="navbar-toggler bg-dark position-absolute d-md-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <GPBreadcrumb breadIcon={breadIcon} crumbs={crumbs} />

            <div className="navbar-nav">
                <div className="nav-item text-nowrap"></div>
            </div>
        </header>
    )
}

export default GPHeader
