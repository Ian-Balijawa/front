
import React, { useState } from 'react'
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable'
import GPModal from '../../../components/GPModal/GPModal'

const OrderModal = ({ show, handleClose }) => {

    const [showModal, setShowModal] = useState(false)

    return (

        <GPModal
            title={"..."}
            show={show}
            handleClose={handleClose}
            buttonText="Email Order"
            onActionButtonClick={() => setShowModal(true)}
        >

            <GPCustomTable />

            <>

                 <GPModal
                    title={"Confirm Order"}
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    buttonText="Confirm"
                    
                 >
                    <p>This eamail will be sent to deusgrace@goldpos.com. Verify that this is correct</p>
                    <GPCustomTable />

                </GPModal>
            </>

        </GPModal>
    )
}

export default OrderModal