import {faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'

function OutletCard({title, gpList, ...props}) {
    return (
        <div>
            <div className="card-header  dash-card-border  bg-gray-e">
                <span className="dash-card-header px-5">{title}</span>
            </div>

            <ul className="list-group list-group-flush  px-5 py-4 dash-ul">
                {gpList.map((gp, index) => (
                    <Link
                        to={gp.href}
                        key={index}
                        className="list-group-item d-flex justify-content-between list-text"
                    >
                        <span>
                            <FontAwesomeIcon
                                className="mx-2"
                                style={{color: '#3E4347'}}
                                icon={gp.icon}
                            />{' '}
                            <span className="mx-1"> {gp.title}</span>
                        </span>
                        <span className="badge bg-transparent rounded-pill">
                            <FontAwesomeIcon
                                style={{color: '#3E4347'}}
                                icon={faChevronRight}
                            />
                        </span>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default OutletCard
