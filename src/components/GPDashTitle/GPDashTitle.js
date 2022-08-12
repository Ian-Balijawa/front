import React from 'react'

function GPDashTitle({gpTitle}) {
    return (
        <div>
            <div className="fw-bold mt-4 text-uppercase">
                <h5>{gpTitle}</h5>
                <hr />
            </div>
        </div>
    )
}

export default GPDashTitle
