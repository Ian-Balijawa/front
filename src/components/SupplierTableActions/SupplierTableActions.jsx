import React from 'react'
import "./supplier-table-actions.css"
import {faEllipsis, faEye} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from 'react-router-dom'


const SupplierTableActions = ({record}) => {

  const navigate = useNavigate() 


  return (
    <div className='supplier-actions-wrapper'>

        <div className='supplier-action-view-btn-cont'>

           <div className='view-btn-action' onClick={()=> navigate("/view-supplier")}>
            <FontAwesomeIcon icon={faEye} style={{color:"#fff"}} />
             View
           </div>
        </div>

        <div className='supplier-actions-elipsis-cont'>
            <FontAwesomeIcon icon={faEllipsis} style={{color:"#E46036",fontSize:"14px"}} className="ellipsis-icon-action" />
        </div>

    </div>
  )
}

export default SupplierTableActions