import {
    faEllipsis,
    faPenToSquare,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import './gp-action-links.css'

function GPActionLinks() {
    return (
        <div className="">
            <ul className="p-0 m-0 d-flex" style={{listStyle: 'none'}}>
                <li className="dropdown">
                    <a
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon
                            className="text-theme mx-3 dropdown"
                            icon={faEllipsis}
                        />
                    </a>
                    <ul className="dropdown-menu custom-dropdown action-links">
                        <li>
                            <Link className="dropdown-item" to="#">
                                <FontAwesomeIcon
                                    className="text-theme mx-3 dropdown"
                                    icon={faPenToSquare}
                                />{' '}
                                <span className="">Edit</span>
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <FontAwesomeIcon
                                    className="text-theme mx-3 dropdown"
                                    icon={faTrashCan}
                                />{' '}
                                <span className="">Delete</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default GPActionLinks
