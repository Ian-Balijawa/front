import React from 'react'
import './gp-radio-button.css'

function GPRadioButton({gpTitle, gpType, ...props}) {
    return (
        <div>
            <div className="form-check">
                <input {...props} className="form-check-input" type={gpType} />
                {props.label && (
                    <label
                        className="form-check-label mx-4"
                        for="flexRadioDefault1"
                    >
                        {props.label}
                    </label>
                )}
            </div>
        </div>
    )
}

export default GPRadioButton
