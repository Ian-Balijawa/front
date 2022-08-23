import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton/CustomButton'
import GPCustomTable from '../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../components/GPLayout/GPLayout'
import { useParams } from 'react-router-dom'
import CustomTextInput from '../../components/CustomTextInput'
import GPCheckBox from '../../components/GPCheckBox/GPCheckBox'
import AddIngredientsTable from '../../components/GPTables/Recipes/AddIngredientsTable'
import CustomPlusIconButton from '../../components/CustomPlusIconButton/CustomPlusIconButton'
import GPModal from '../../components/GPModal/GPModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const EditRecipe = () => {


    const AddIcon =()=>(
        <div style={{width:"25px",height:"25px",border:"1px solid #7a7a7a",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           <FontAwesomeIcon icon={faPlus} size={20} />
        </div>
    )


    const EditIcon =()=>(
        <div style={{width:"25px",height:"25px",border:"1px solid #7a7a7a",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           <FontAwesomeIcon icon={faPen} size={20} />
        </div>
    )

    const DeleteIcon =()=>(
        <div style={{width:"25px",height:"25px",border:"1px solid #7a7a7a",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           <FontAwesomeIcon icon={faTrashCan} size={20} />
        </div>
    )

    const CheckIcon =()=>(
        <div style={{width:"25px",height:"25px",border:"1px solid #7a7a7a",borderRadius:"3px",display:"flex",justifyContent:"center",alignItems:"center"}}>
           <FontAwesomeIcon icon={faCheck} size={20} />
        </div>
    )

    const _packageTableColumns = [
        {
            title: "Package Type",
            field: "package_type"
        },
        {
            title: "Content",
            field: "content"
        },
        {
            title: "Storable",
            field: "storable",
            render:(rowData)=>( <CheckIcon/>)
        },
        {
            title: "Avg Price",
            field: "avarage_price"
        },
        {
            title: "Base Price",
            field: "base_price"
        },
        {
            title: "Supplier",
            field: "supplier",
            render:(rowData)=>( <AddIcon/>)
        },
        {
            title: "Edit",
            field: "edit",
            render:(rowData)=>( <EditIcon/>)
        },
        {
            title: "Delete",
            field: "Delete",
            render:(rowData)=>( <DeleteIcon/>)
        },
    ]


    const dummySaveData = [
        {package_type:"Bottle",content:"1L",storable:true,avarage_price:"Ush 5000",base_price:"0",supplier:""}
    ]
    

   


    const params = useParams()

    const [showEditModal, setShowEditModal] = useState(false)



    return (
        <GPLayout>
            <div style={{ width: "100%" }}>

                <div style={{ width: "100%", display: "flex", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", paddingBottom: "13px" }}>
                    <CustomButton
                        title="Save"
                        style={{ width: "170px", height: "40px" }}
                        withBackground={true}
                    />

                    <CustomButton
                        title="Save & Start"
                        style={{ width: "170px", height: "40px", color: "#000000" }}
                        withBackground={false}
                    />
                </div>

                {/* <div style={{ padding: "22px", color: "#000000", fontSize: "30px", fontWeight: 400 }}>
                    {params.name}
                </div> */}

                <div style={{ width: "100%", margin: "22px" }}>

                    <CustomTextInput
                        style={{ width: "300px", height: "40px" }}
                        label="Recipe Title"
                        labelPosition='left'
                    />
                </div>

                <Tabs
                    defaultActiveKey="packaging"
                    id="vew-recipe"
                    className="mb-3"

                >
                    <Tab eventKey="general" title="General" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>


                    </Tab>



                    <Tab eventKey="packaging" title="Packaging & Pricing" tabClassName="tab">
                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "10px", marginBottom: "20px" }}>

                            <Container>
                                <Row>
                                    <Col lg="6">
                                        <h5> Package Information </h5>

                                        <GPCustomTable
                                            toolbar={false}
                                            title="Package Information"
                                            columns={_packageTableColumns}
                                            data={dummySaveData}
                                            gppagination={false}
                                        />

                                        <div style={{ width: "100%", borderBottom: "1px solid #000000", marginTop: "30px", marginBottom: "15px" }}>
                                            <h5> Convations & Waste</h5>
                                        </div>


                                    </Col>





                                    <Col lg="6">

                                        <h5> Suppliers & Pricing </h5>

                                        <GPCustomTable
                                            toolbar={false}
                                            title="Package Information"
                                            columns={_packageTableColumns}
                                            data={[]}
                                            gppagination={false}
                                        />


                                    </Col>

                                </Row>

                                <Row>

                                    <Col lg="12">

                                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>

                                            <div style={{ width: "50%" }}>
                                                <h5>Conversions</h5>
                                                <div style={{ display: "flex" }}>
                                                    <GPCheckBox />
                                                    <h6 style={{ marginLeft: "10px" }}> Change Ratio Between Kg/L</h6>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <div>1 KG = </div>
                                                    <CustomTextInput
                                                        style={{ width: "140px", height: "40px" }}
                                                    />
                                                    <div>L</div>
                                                </div>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                                <h6>.</h6>
                                                <h6> Waste percentage</h6>
                                                <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                                                    <div></div>
                                                    <CustomTextInput
                                                        style={{ width: "140px", height: "40px" }}
                                                        placeholder="None"
                                                    />
                                                    <div></div>
                                                </div>
                                            </div>

                                        </div>

                                        <div style={{ marginTop: "22px", marginBottom: "22px" }} >
                                            <CustomPlusIconButton
                                                title="Add Package Type"
                                                style={{ width: "170px", height: "40px" }}
                                                onClick={() => setShowEditModal(true)}

                                            />
                                        </div>


                                    </Col>

                                </Row>
                            </Container>
                        </div>


                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "10px", marginBottom: "20px" }}>

                            <AddIngredientsTable />
                        </div>

                        <GPModal
                            show={showEditModal}
                            title="Create Package"
                            buttonText='Add Package'
                            handleClose={()=> setShowEditModal(false)}

                        >

                            <div style={{ width: "100%", padding: "22px", borderBottom: "1px solid #000000" }}>

                                <CustomTextInput
                                    labelPosition='left'
                                    label="Package Description"

                                />

                                <CustomTextInput
                                    labelPosition='left'
                                    label="Package Quantity"

                                />

                                <CustomTextInput
                                    labelPosition='left'
                                    label="Unit"

                                />

                                <CustomTextInput
                                    labelPosition='left'
                                    label="EAN/UPC"
                                    placeholder="eg 600962245609"

                                />

                            </div>
                            <div style={{ width: "100%", display: "flex",justifyContent:"space-between",alignItems:"center",paddingTop:"22px",paddingLeft:"22px",paddingRight:"22px",boxSizing:"border-box" }}>
                                <GPCheckBox
                                    label="Is active?"
                                    labelTop={true}
                                />
                                <GPCheckBox
                                    label="Is stockable?"
                                    labelTop={true}
                                />


                                <GPCheckBox
                                    label="Is piece?"
                                    labelTop={true}
                                />
                            </div>

                        </GPModal>


                    </Tab>




                    <Tab eventKey="inventory" title="Inventory" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>

                    </Tab>
                    <Tab eventKey="portioning" title="Portioning" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>

                    </Tab>
                    <Tab eventKey="production" title="Production" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>

                    </Tab>
                    <Tab eventKey="outlets" title="Outlets" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>

                    </Tab>
                    <Tab eventKey="images" title="Images" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>

                    </Tab>

                </Tabs>





            </div>

        </GPLayout>
    )
}

export default EditRecipe