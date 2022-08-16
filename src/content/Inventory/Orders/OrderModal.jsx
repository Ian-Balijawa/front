import React from 'react'
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable'
import GPModal from '../../../components/GPModal/GPModal'

const OrderModal = ({show,handleClose}) => {
  return (
     <GPModal
       title={"..."}
       show={show}
       handleClose={handleClose}
       buttonText="Email Order"
     >

        <GPCustomTable/>
          
     </GPModal>
  )
}

export default OrderModal