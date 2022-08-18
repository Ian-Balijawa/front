import React from 'react'
import './plusIconButton.css'

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const CustomPlusIconButton = ({ title, url, onClick }) => {

   const navigate = useNavigate() 
    
  return (

    <div className='btn-main' onClick={()=> url ? navigate(url) : onClick()}>

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