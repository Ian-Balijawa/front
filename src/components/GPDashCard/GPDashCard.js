import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import './gp-dash-card.css'

function GPDashCard({gpIcon, gpTitle, gpLink, gpClassName}) {
    return (
        <div className={gpClassName}>
            <div className="card gbDashCard">
                <div className="card-body gbDashCardBody mt-4">
                    <FontAwesomeIcon
                        className="dash-icon-bg"
                        icon={gpIcon}
                        size="4x"
                    />
                    <div className="card-title gp-card-title">
                        <Link to={gpLink}>{gpTitle}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GPDashCard
