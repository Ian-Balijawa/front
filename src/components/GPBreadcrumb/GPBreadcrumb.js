import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

function GPBreadcrumb(props) {
    function isLast(index) {
        return index === props.crumbs.length - 1
    }

    return (
        <>
            {props.crumbs && (
                <nav
                    aria-label="breadcrumb top-crumbs"
                    style={{marginTop: '13px', marginLeft: '25px'}}
                >
                    <ol className="breadcrumb">
                        <FontAwesomeIcon icon={props.breadIcon} size="2x" />
                        {props.crumbs.map((crumb, index) => {
                            const active = isLast(index)
                                ? 'gp-crumb-active'
                                : ''

                            return (
                                <li
                                    key={index}
                                    className={`breadcrumb-item gp-breadcrumb-item ${active}`}
                                >
                                    <Link to={crumb.href} {...active}>
                                        {crumb.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ol>
                </nav>
            )}
        </>
    )
}

export default GPBreadcrumb
