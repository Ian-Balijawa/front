import React from 'react'
import './gp-radio-button.css'

function GPRadioButton({gpTitle, gpType, ...props}) {
    return (
        <div>
            <div className="form-check">
                <input {...props} className="form-check-input" type={gpType} />
                {gpTitle && (
                    <label className="form-check-label" for="flexRadioDefault1">
                        {gpTitle}
                    </label>
                )}
            </div>
        </div>
    )
}

export default GPRadioButton
