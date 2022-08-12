import React from 'react'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function GPIconButton({title, to, gpClassName, ...props}) {
    return (
        <div>
            <div className="d-grid gap-2">
                <Button {...props} className={`btn ${gpClassName}`}>
                    <FontAwesomeIcon icon={props.icon} /> {title}
                </Button>
            </div>
        </div>
    )
}

export default GPIconButton
