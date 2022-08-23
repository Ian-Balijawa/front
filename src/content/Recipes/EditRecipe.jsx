import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton/CustomButton'
import GPCustomTable from '../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../components/GPLayout/GPLayout'
import { useParams } from 'react-router-dom'
import CustomTextInput from '../../components/CustomTextInput'
import GPCheckBox from '../../components/GPCheckBox/GPCheckBox'
import AddIngredientsTable from '../../components/GPTables/Recipes/AddIngredientsTable'


const EditRecipe = () => {

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


    const params = useParams()



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
                                            data={[]}
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

                                            <div style={{width:"50%" }}>
                                                <h5>Conversions</h5>
                                                <div style={{ display: "flex" }}>
                                                    <GPCheckBox />
                                                    <h6 style={{ marginLeft: "10px" }}> Change Ratio Between Kg/L</h6>
                                                </div>
                                                <div style={{ display: "flex",alignItems:"center" }}>
                                                    <div>1 KG = </div>
                                                    <CustomTextInput
                                                        style={{ width: "140px", height: "40px" }}
                                                    />
                                                    <div>L</div>
                                                </div>
                                            </div>

                                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"}}>
                                                <h6>.</h6>
                                                <h6> Waste percentage</h6>
                                                <div style={{ display: "flex",alignItems:"center",marginTop:"15px" }}>
                                                    <div></div>
                                                    <CustomTextInput
                                                        style={{ width: "140px", height: "40px" }}
                                                        placeholder="None"
                                                    />
                                                    <div></div>
                                                </div>
                                            </div>

                                        </div>


                                    </Col>

                                </Row>
                            </Container>
                        </div>


                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", padding: "10px", marginBottom: "20px" }}>

                         <AddIngredientsTable/>
                        </div>
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