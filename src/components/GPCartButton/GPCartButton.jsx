import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import './gp-cart-button.css'

const GPCartButton = ({title="Your Shopping Cart",count=0,onClick}) => {
    return (
        <div className='btn-main' onClick={onClick}>

            <div className='icon-cont'>

              <FontAwesomeIcon
                 className='cart-icon'
                 icon={faCartShopping}
               />

            </div>

            <div className='text-cont'>
                  {title}
            </div>

            <div className='count-cont'>

                <div className='count'>
                    {count}
                </div>

            </div>

        </div>
    )
}

export default GPCartButton