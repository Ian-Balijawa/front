import React,{useState} from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton/CustomButton'
import GPCustomTable from '../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../components/GPLayout/GPLayout'
import { useParams } from 'react-router-dom'
import GPModal from '../../components/GPModal/GPModal'
import CustomTextInput from '../../components/CustomTextInput'
import GPSelectInput from '../../components/GPSelectInput.js/GPSelectInput'

const ViewRecipe = () => {


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
            title: "Stockable",
            field: "stockable"
        },
        {
            title: "Active Piece",
            field: "active_piece"
        },
        {
            title: "Avg Price",
            field: "avarage_price"
        },
        {
            title: "UPC/EAN",
            field: "upc"
        }
    ]



    const _bottomTableColumns = [
        {
            title: "Ingredients & sub recipes",
            field: "ingredient"
        },
        {
            title: "Supplier",
            field: "supplier"
        },
        {
            title: "Net Qty",
            field: "net_qty"
        },
        {
            title: "Gross Qty",
            field: "gross_qty"
        },
        {
            title: "Waste %",
            field: "waste"
        }

    ]

    const _bottomTableData = [
        { ingredient: "Mayonnaise", supplier: "Nico&Nic Suppliers", net_qty: "60 ml", gross_qty: "60 ml", waste: "0%" },
        { ingredient: "Lemon Juice", supplier: "Juice & Nic", net_qty: "6 ml", gross_qty: "6 ml", waste: "0%" },
        { ingredient: "Lemon Zest", supplier: "Nico&Nic Suppliers", net_qty: "4 g", gross_qty: "4 g", waste: "0%" }


    ]


    const billOfMaterialColumns = [
         {title:"Ingredient",field:"ingredient"},
         {title:"Needed Qty",field:"needed_qty"},
         {title:"Stock Qty",field:"stock_qty"},
         {title:"Order Qty",field:"order_qty"},
         {title:"Choose Product",field:"choose_product",render:(rowData)=><GPSelectInput placeholder="Bake my day ntinda" />},
         {title:"Total",field:"total"},
    ]



    const billOfMaterialData = [
        {ingredient:"Sea Salt",needed_qty:"20g",stock_qty:"----",order_qty:"1 x sea salt 1kg = 1 kg",choose_product:"x",total:"ugx 20000"},
        {ingredient:"Rice",needed_qty:"30kg",stock_qty:"----",order_qty:"1 x sea salt 1kg = 1 kg",choose_product:"x",total:"ugx 40500"},
        {ingredient:"Sugar",needed_qty:"5kg",stock_qty:"----",order_qty:"1 x sea salt 1kg = 1 kg",choose_product:"x",total:"ugx 90000"},
        {ingredient:"Avocado",needed_qty:"8g",stock_qty:"----",order_qty:"1 x sea salt 1kg = 1 kg",choose_product:"x",total:"ugx 7000"},



    ]

    const params = useParams()

    const [showAssistiveOrderingModal,setShowAssistiveOrderingModal] = useState(false)
    const [showGenerateBillOfMaterialsModal,setShowGenerateBillOfMaterialsModal] = useState(false)



    const Item = ({ title, value }) => (
        <div>
            <div> {title}</div>
            <div>{value}</div>
        </div>
    )

    return (
        <GPLayout>

            <div style={{ width: "100%" }}>

                <div style={{ width: "100%", display: "flex", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", paddingBottom: "13px" }}>
                    <CustomButton
                        title="Edit"
                        style={{ width: "100px", height: "50px", color: "#000000" }}
                        withBackground={false}
                        iconName="faPenToSquare"
                        url={`/recipes/${params.name}/edit`} //depends on params
                    />

                    <CustomButton
                        title="Delete"
                        style={{ width: "100px", height: "50px", color: "#000000" }}
                        withBackground={false}
                        iconName="faTrashCan"
                    />
                </div>

                <div style={{ padding: "22px", color: "#000000", fontSize: "30px", fontWeight: 400 }}>
                    {params.name}
                </div>

                <Tabs
                    defaultActiveKey="general"
                    id="vew-recipe"
                    className="mb-3"
                >
                    <Tab eventKey="general" title="General" tabClassName="tab">

                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "22px", marginBottom: "20px" }}>
                            <h5> General Information </h5>

                            <div style={{ display: "flex" }}>
                                {/* gray box */}
                                <div style={{ width: "128px", height: "128px", background: "#D9D9D9", borderRadius: "6px", margin: "18px" }}>
                                    
                                </div>
                                {/* details container */}
                                <div style={{ width: "100%" }}>

                                    <Container>
                                        <Row style={{ width: "100%", height: "60px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)" }}>


                                            <Col lg="3">
                                                <Item title="EAN/UPC" value="847277381666" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Product Type" value="Finished product" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Difficulty" value="------" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Shelf Life" value="------" />

                                            </Col>


                                        </Row>


                                        <Row style={{ width: "100%", height: "60px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)" }}>


                                            <Col lg="3">
                                                <Item title="Category" value="Vegetables" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Create At" value="12/Augsut/2022" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Last Modified" value="12/Augsut/2022" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Created" value="12/Augsut/2022" />

                                            </Col>


                                        </Row>



                                        <Row style={{ width: "100%", height: "60px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)" }}>


                                            <Col lg="3">
                                                <Item title="Sub Category" value="greens" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="By" value="Grace Annita" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Class" value="------" />

                                            </Col>

                                            <Col lg="3">
                                                <Item title="Cuisine" value="------" />

                                            </Col>


                                        </Row>







                                    </Container>



                                </div>

                            </div>

                        </div>

                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "22px", marginBottom: "20px" }}>

                            <div style={{ width: "100%", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h5> Ingredient & sub recipes </h5>
                                <h5 style={{ color: "#0069A5" }}>1 Serving</h5>
                            </div>

                            <GPCustomTable
                                data={_bottomTableData}
                                columns={_bottomTableColumns}
                                gppagination={false}
                                toolbar={false}

                            />

                            <div style={{ width: "100%", height: "80px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <CustomButton 
                                   onClick={()=> setShowAssistiveOrderingModal(true) }
                                   title="Bill of Materials"
                                   iconName="faCreditCard"
                                   style={{width:"170px",height:"40px",background:"#eeeeee",border:" 0.5px solid #7A7A7A",color:"#000"}}
                                 />
                            </div>

                        </div>


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
                                            data={[]}
                                            gppagination={false}
                                        />

                                        <div style={{ width: "100%", borderBottom: "1px solid #000000", marginTop: "30px", marginBottom: "15px" }}>
                                            <h5> Convations & Waste</h5>
                                        </div>
                                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>

                                            <div>
                                                <h6> Change Ratio Between Kg/L</h6>
                                                <p>1 KG = L </p>
                                            </div>

                                            <div>
                                                <h6> Waste percentage</h6>
                                                <p>1 KG = L</p>
                                            </div>

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
                            </Container>
                        </div>


                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "10px", marginBottom: "20px" }}>

                            <GPCustomTable
                                toolbar={false}
                                title="Package Information"
                                columns={_bottomTableColumns}
                                data={_bottomTableData}
                                gppagination={false}
                            />
                        </div>

                    {/* Assertive ordering modal */}
                        <GPModal
                           title="Assistive Ordering"
                           show={showAssistiveOrderingModal}
                           buttonText="Generate bill of materials"
                           handleClose={()=> setShowAssistiveOrderingModal(false) }
                           onActionButtonClick={()=>{
                            setShowAssistiveOrderingModal(false)
                            setShowGenerateBillOfMaterialsModal(true)
                           }}

                         >

                            <div>

                                <GPSelectInput
                                   label="Select an outlet"
                                   labelPosition='left'
                                   placeholder="Bake My day Intinda"
                                />

                               <CustomTextInput
                                 label="Fill out Project servings"
                                 labelPosition='left'
                                 placeholder={20}
                               />

                            </div>


                        </GPModal>

                        {/* bill of material modal */}

                        <GPModal
                           title="Bill of materials for 20.0  Servings"
                           show={showGenerateBillOfMaterialsModal}
                           buttonText="Generate bill of materials"
                           handleClose={()=> setShowGenerateBillOfMaterialsModal(false) }
                           size="lg"

                         >

                            <GPCustomTable
                                data={billOfMaterialData}
                                columns={billOfMaterialColumns}
                                gppagination={false}
                                options={{
                                    exportButton: true
                                  }}
                            />


                         </GPModal>


                    </Tab>




                    <Tab eventKey="inventory" title="Inventory" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                    </Tab>
                    <Tab eventKey="portioning" title="Portioning" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                    </Tab>
                    <Tab eventKey="production" title="Production" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                    </Tab>
                    <Tab eventKey="outlets" title="Outlets" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                    </Tab>
                    <Tab eventKey="images" title="Images" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                    </Tab>

                </Tabs>





            </div>

        </GPLayout>
    )
}

export default ViewRecipe