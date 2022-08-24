import './menu.css'

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
import './menu.css'
import {Link, useNavigate} from 'react-router-dom'
import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'

function Menu() {
    const crumbs = [
        {
            text: 'Menu',
            href: '/Menu',
        },
    ]

    const navigate = useNavigate()
    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <h1>Menu</h1>
        </GPLayout>
    )
}

export default Menu
