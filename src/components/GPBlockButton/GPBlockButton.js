import React from 'react'
import {Button} from 'react-bootstrap'

function GPBlockButton({title, to, gpClassName, ...props}) {
    return (
        <div>
            <div className="d-grid gap-2">
                <Button {...props} className={`btn shadow-none ${gpClassName}`}>
                    {title}
                </Button>
            </div>
        </div>
    )
}

export default GPBlockButton
