import React from 'react'
import "./supplier-table-actions.css"
import {faEllipsis, faEye} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SupplierTableActions = ({record}) => {


  return (
    <div className='supplier-actions-wrapper' onClick={()=>{
        let rec = JSON.stringify(record)
        alert(rec)
    }}>

        <div className='supplier-action-view-btn-cont'>

           <div className='view-btn-action'>
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