import './sales.css'

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

import {Link, useNavigate} from 'react-router-dom'
import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'

function Sales() {
    const crumbs = [
        {
            text: 'Sales',
            href: '/Sales',
        },
    ]

    const navigate = useNavigate()
    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <h1>Sales</h1>
        </GPLayout>
    )
}

export default Sales
