import React from 'react'
import "./custom-delivered-icon-card.css"

const CustomDeliveredIconCard = ({ renderIcon, title, value ,transparent }) => {

    const Icon = renderIcon

    return (
        <div className='delivered-icon-card-main'>

            <div className='delivered-card-icon-cont' style={{background:transparent?"transparent":"inherent"}}>
                {
                    renderIcon && <Icon />
                }
            </div>
            {/* text zone */}
            <div className='delivered-card-text-cont'>

                <div className='delivered-card-title'>
                    {title}
                </div>

                <div className='delivered-card-value'>
                    {value}
                </div>

            </div>


        </div>
    )
}

export default CustomDeliveredIconCard