import React from 'react'
import './plusIconButton.css'

const CustomPlusIconButton = ({title,onClick}) => {
  return (
    <div className='btn-main' onClick={onClick}>
        <div className='btn-icon'>
            +
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