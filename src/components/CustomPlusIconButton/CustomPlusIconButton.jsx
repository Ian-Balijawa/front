import React from 'react'
import './plusIconButton.css'

import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomPlusIconButton = ({title,onClick}) => {
  return (
    <div className='btn-main' onClick={onClick}>
        <div className='btn-icon'>
            <FontAwesomeIcon icon={faPlus} />
        </div>

        <div className='btn-text'>
            {
                title
            }
        </div>

    </div>
  )
}

export default CustomPlusIconButton