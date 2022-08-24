
import React, { useState } from 'react'
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput'
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable'
import GPModal from '../../../components/GPModal/GPModal'

const OrderModal = ({ show, handleClose }) => {

    const [showModal, setShowModal] = useState(false)

    const orderModalTableColumns = [
        { title: "EAN/UPC", field: "upc" },
        { title: "Stock Item", field: "stock_item" },
        { title: "Price", field: "price" },
        { title: "Qty", field: "qty" },
        { title: "Sub Total", field: "sub_total" }

    ]

    const orderModalTableData = [
        { upc: "600128393", stock_item: "Beer Crate full pack (24x33 cl)", price: "Ush 20,000/ 24x33 cl", qty: 5, sub_total: "100,000" },
        { upc: "600128393", stock_item: "Lemon Juice", price: "Ush 10,000/ 70ml", qty: 1, sub_total: "10,000" },
        { upc: "600128393", stock_item: "Sugar 1kg", price: "Ush 5,000/ 1kg", qty: 1, sub_total: "5,000" },
        { upc: "600128393", stock_item: "White pepper 1kg", price: "Ush 11,000/ 1kg", qty: 22, sub_total: "242,000" },



    ]

    return (

        <GPModal
            title={"..."}
            show={show}
            handleClose={handleClose}
            buttonText="Email Order"
            onActionButtonClick={() => setShowModal(true)}
            size="lg"
        >

            <div>

                <GPCustomTable
                    data={orderModalTableData}
                    columns={orderModalTableColumns}
                    gppagination={false}
                    toolbar={false}
                />

                <div style={{ width: "100%", height: "60px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <div style={{ width: "100px", fontSize: "20px", fontWeight: 700 }}>Total (Ush) </div>
                    <div style={{ width: "100px", fontSize: "20px", fontWeight: 700 }}>678,000 </div>

                </div>

                <div style={{ width: "100%", height: "160px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <CustomTextInput
                        labelPosition='left'
                        label="Delivery Date"
                        placeholder={"DD/MM/YYYY"}
                    />

                    <CustomTextInput
                        labelPosition='left'
                        label="Delivery Time"

                    />

                </div>

            </div>

            <>

                <GPModal
                    title={"Confirm Order"}
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    buttonText="Confirm"
                    size="lg"

                >
                    <p >This eamail will be sent to deusgrace@goldpos.com. Verify that this is correct</p>
                    <GPCustomTable
                        data={orderModalTableData}
                        columns={orderModalTableColumns}
                        gppagination={false}
                        toolbar={false}
                    />
                    <div style={{ width: "100%", height: "60px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <div style={{ width: "100px", fontSize: "20px", fontWeight: 700 }}>Total (Ush) </div>
                        <div style={{ width: "100px", fontSize: "20px", fontWeight: 700 }}>678,000 </div>

                    </div>

                    <p style={{width:"50%",fontSize:"10px"}}>
                        Nic&Nico will receive an email with a purchasing order.
                        The order  should be delivered on 12/07/2022  9:00
                    </p>


                    <div style={{ width: "100%", height: "160px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <CustomTextInput
                            labelPosition='top'
                            label="Remarks (optional)"

                        />
                    </div>



                </GPModal>
            </>

        </GPModal>
    )
}

export default OrderModal