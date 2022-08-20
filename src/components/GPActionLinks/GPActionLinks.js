import {
    faEllipsis,
    faPenToSquare,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import './gp-action-links.css'

function GPActionLinks({actionLinks, ...props}) {
    return (
        <div className="">
            <ul className="p-0 m-0 d-flex" style={{listStyle: 'none'}}>
                <li className="dropdown">
                    <span
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon
                            className="text-theme mx-3 dropdown"
                            icon={faEllipsis}
                        />
                    </span>
                    <ul className="dropdown-menu custom-dropdown px-2 action-links">
                        {actionLinks.map((actionLink, index) => (
                            <li key={index}>
                                <Link
                                    className="dropdown-item"
                                    to={actionLink.href}
                                >
                                    {actionLink.icon && (
                                        <FontAwesomeIcon
                                            className="text-theme mx-3 dropdown"
                                            icon={actionLink.icon}
                                        />
                                    )}{' '}
                                    <span className="">{actionLink.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default GPActionLinks
