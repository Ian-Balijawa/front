import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomButton from '../../components/CustomButton/CustomButton'
import GPCustomTable from '../../components/GPCustomTable/GPCustomTable'
import GPLayout from '../../components/GPLayout/GPLayout'
import { useParams } from 'react-router-dom'

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

  const  _bottomTableData = [
    {ingredient:"Mayonnaise",supplier:"Nico&Nic Suppliers",net_qty:"60 ml",gross_qty:"60 ml",waste:"0%"},
    {ingredient:"Lemon Juice",supplier:"Juice & Nic",net_qty:"6 ml",gross_qty:"6 ml",waste:"0%"},
    {ingredient:"Lemon Zest",supplier:"Nico&Nic Suppliers",net_qty:"4 g",gross_qty:"4 g",waste:"0%"}


  ]

  const params = useParams()

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
                    <Tab eventKey="general" title="General" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">


                    </Tab>



                    <Tab eventKey="packaging" title="Packaging & Pricing"  tabClassName="tab">
                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)",width:"100%",padding:"10px",marginBottom:"20px" }}>

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


                        <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)",width:"100%",padding:"10px",marginBottom:"20px" }}>

                        <GPCustomTable
                                            toolbar={false}
                                            title="Package Information"
                                            columns={_bottomTableColumns}
                                            data={_bottomTableData}
                                            gppagination={false}
                                        />
                        </div>
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