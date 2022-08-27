import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import './gp-dash-card.css'

function GPDashCard({gpIcon, renderIcon, gpTitle, gpLink, gpClassName}) {
    let Icon = renderIcon

    return (
        <Link to={gpLink} className={gpClassName}>
            <div
                className="card gbDashCard"
                style={{marginTop: '6px', marginBottom: '6px'}}
            >
                <div
                    className="card-body gbDashCardBody  p-0"
                    style={{position: 'relative', width: '100%'}}
                >
                    {renderIcon ? (
                        <div>
                            <Icon />
                        </div>
                    ) : (
                        <FontAwesomeIcon
                            className="dash-icon-bg"
                            icon={gpIcon}
                            size="2x"
                        />
                    )}
                    <div
                        className="gp-card-title"
                        style={{
                            position: 'absolute',
                            top: '30%',
                            left: 0,
                            width: '100%',
                        }}
                    >
                        <span>{gpTitle}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GPDashCard
