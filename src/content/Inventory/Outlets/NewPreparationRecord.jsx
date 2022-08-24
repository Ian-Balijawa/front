import React from 'react'
import CustomButton from '../../../components/CustomButton/CustomButton'
import CustomTextInput from '../../../components/CustomTextInput'
import GPLayout from '../../../components/GPLayout'

const NewPreparationRecord = () => {
    return (
        <GPLayout>
            <div style={{ width: "100%", padding: "22px" }}>

                <div style={{ width: "100%", height: "60px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <CustomButton
                        style={{ width: "170px", height: "40px" }}
                        title="Save Changes"
                    />

                    <CustomButton
                        style={{ width: "170px", height: "40px", color: "#000000" }}
                        title="Cancel"
                        withBackground={false}
                    />

                    <CustomButton
                        style={{ width: "170px", height: "40px", color: "#000000" }}
                        title="Reset"
                        withBackground={false}
                    />
                </div>

                <h4 className='m-3'>Creation Events from Bake My Day Entebbe</h4>

                {/* adding inputs */}

                <div style={{ width: "100%", minHeight: "400px", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", border: "0.5px solid #CBCBCB", borderRadius: "6px", background: "#ffff", padding: "22px" }}>

                    <div style={{ width: "100%", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", height: "34px", display: "flex", alignItems: "center" }}>
                        Add recipes to this preparation event
                    </div>

                    <div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Stock Item</th>
                                    <th>Quantity</th>
                                    <th>Total Qty</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr >
                                    <td> <CustomTextInput
                                        style={{ width: "300px", height: "35px", margin: "4px" }}
                                    />
                                    </td>
                                    <td>
                                        <CustomTextInput style={{ width: "100px", height: "35px", margin: "4px" }} />
                                    </td>
                                    <td>  <div style={{ width: "100px", height: "35px", margin: "4px" }}></div> </td>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <CustomTextInput style={{ width: "200px", height: "35px", margin: "4px" }} />
                                            <CustomButton title="Add" style={{ width: "50px", height: "35px", margin: "4px" }} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>


                        </table>
                    </div>


                    <div style={{ width: "100%", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", height: "34px", display: "flex", alignItems: "center" }}>
                        List Of Prepared Items
                    </div>


                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th> </th>
                                    <th> </th>
                                    <th> </th>
                                    <th> </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div style={{ width: "300px", height: "35px", margin: "4px" }}>
                                            Home made Lemon Mayonnase (1kg)
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: "100px", height: "35px", margin: "4px",textAlign:"center" }}>
                                            1
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: "100px", height: "35px", margin: "4px",textAlign:"center" }}>
                                            70g
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: "150px", height: "35px", margin: "4px",textAlign:"center" }}>
                                            N/A
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", alignItems: "center",justifyContent:"flex-end" }}>
                                            <CustomButton
                                                title="Remove"
                                                style={{ width: "120px", height: "35px", margin: "4px", color: "#000" }}
                                                withBackground={false}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>


                        </table>
                    </div>

                </div>




            </div>

        </GPLayout>
    )
}

export default NewPreparationRecord