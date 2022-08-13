import React from 'react'

function GPTextarea({label, gpClassName, rows, ...props}) {
    return (
        <div>
            {label && (
                <label className="form-label" htmlFor={props.id}>
                    {label}
                </label>
            )}
            <textarea {...props} className={gpClassName} rows={rows}></textarea>
        </div>
    )
}

export default GPTextarea
