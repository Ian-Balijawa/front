import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomTextInput from '../../components/CustomTextInput'
import GPBlockButton from '../../components/GPBlockButton'
import GPLayout from '../../components/GPLayout/GPLayout'
import GPSelectInput from '../../components/GPSelectInput.js/GPSelectInput'
import './recipes.css'


const NewRecipe = () => {
    return (
        <GPLayout>
            <div className='new-recipe-wrapper'>

                <div className='new-recipe-header-cont'>
                    <GPBlockButton title="Save Changes" gpClassName="bg-theme border-0 btn-sm new-recipe-block-btn" />
                    <GPBlockButton title="Save & Start New" gpClassName="bg-theme border-0 btn-sm start-recipe-block-btn" />


                </div>

                <div className='new-recipe-title-cont'>
                    <div style={{ height: "40px", fontSize: '25px', fontWeight: 400, color: "#000000", marginBottom: "20px" }} >
                        Create a new Recipe
                    </div>

                    <CustomTextInput
                        style={{ width: "300px", height: "40px" }}
                        label="Recipe Title"
                        labelPosition='left'
                    />

                </div>

                <div className='new-recipe-general-cont' style={{ paddingTop: "23px" }}>
                    {/* tabs */}

                    <Tabs
                        defaultActiveKey="progress"
                        id="order-list"
                        className="mb-3"
                    >
                        <Tab eventKey="general" title="General" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                            <div className='new-recipe-tab-1-wrapper' style={{ padding: "40px" }}>

                                <div className='new-recipe-tab-input-cont' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Container>
                                        <Row>
                                            {/* column one */}
                                            <Col lg="4" >
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="EAN/UPC"
                                                    placeholder="BARCODE"
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="System ID "
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="Custom ID"
                                                    placeholder="Custom ID"
                                                    labelPosition='left'
                                                />
                                            </Col>
                                            <Col lg="4" >
                                            <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="Cuisine"
                                                    placeholder="Eg: French,Indian,Italian"
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="Shelf Life "
                                                    placeholder="Number of days"

                                                    labelPosition='left'
                                                />
                                                 

                                                 <GPSelectInput

                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="Custom ID"
                                                    placeholder="Custom ID"
                                                    
                                                 />


                                            </Col>


                                            <Col lg="4" >
                                            <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="EAN/UPC"
                                                    placeholder="BARCODE"
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="System ID "
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px",margin:0 }}
                                                    label="Custom ID"
                                                    placeholder="Custom ID"
                                                    labelPosition='left'
                                                />
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>

                                {/* text area region */}

                                <div>

                                </div>


                            </div>

                        </Tab>

                        <Tab eventKey="inventory" title="Inventory" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "2"
                        </Tab>
                        <Tab eventKey="portioning" title="Portioning" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "3"
                        </Tab>
                        <Tab eventKey="production" title="Production" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "3"
                        </Tab>
                        <Tab eventKey="financial" title="Financial" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "3"
                        </Tab>
                        <Tab eventKey="outlets" title="Outlets" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "3"
                        </Tab>
                        <Tab eventKey="images" title="Images" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            "3"
                        </Tab>

                    </Tabs>



                </div>
            </div>

        </GPLayout>
    )
}

export default NewRecipe