import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import './gp-dash-card.css'

function GPDashCard({gpIcon, renderIcon, gpTitle, gpLink, gpClassName}) {
    let Icon = renderIcon

    return (
        <Link to={gpLink} className={gpClassName}>
            <div className="card gbDashCard">
                <div className="card-body gbDashCardBody mt-4">
                    {renderIcon ? (
                        <div style={{width: '100px', height: '62px'}}>
                            <Icon />
                        </div>
                    ) : (
                        <FontAwesomeIcon
                            className="dash-icon-bg"
                            icon={gpIcon}
                            size="4x"
                        />
                    )}
                    <div className="card-title gp-card-title">
                        <span>{gpTitle}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GPDashCard
