import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import CustomTextInput from '../../components/CustomTextInput'
import GPBlockButton from '../../components/GPBlockButton'
import GPCard from '../../components/GPCard/GPCard'
import GPCheckBox from '../../components/GPCheckBox/GPCheckBox'
import GPLayout from '../../components/GPLayout/GPLayout'
import GPSelectInput from '../../components/GPSelectInput.js/GPSelectInput'
import AddIngredientsTable from '../../components/GPTables/Recipes/AddIngredientsTable'
import {faBox} from '@fortawesome/free-solid-svg-icons'

import './recipes.css'


const NewRecipe = () => {


    const crumbs = [
        {
            text: 'Inventroy',
            href: '/inventory',
        },
        {
          text: 'Recipe',
          href: '/inventory/recipes',
        },
        {
            text: 'New',
            href: '#',
          }
    ]


    return (
        <GPLayout breadIcon={faBox} crumbs={crumbs} >
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
                        defaultActiveKey="general"
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
                                                    style={{ width: "280px", height: "40px", margin: 0 }}
                                                    label="EAN/UPC"
                                                    placeholder="BARCODE"
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px", margin: 0, background: " #EEEEEE" }}
                                                    label="System ID "
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px", margin: 0 }}
                                                    label="Custom ID"
                                                    placeholder="Custom ID"
                                                    labelPosition='left'
                                                />
                                            </Col>
                                            <Col lg="4" >
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px", margin: 0 }}
                                                    label="Cuisine"
                                                    placeholder="Eg: French,Indian,Italian"
                                                    labelPosition='left'
                                                />
                                                <CustomTextInput
                                                    style={{ width: "280px", height: "40px", margin: 0 }}
                                                    label="Shelf Life "
                                                    placeholder="Number of days"

                                                    labelPosition='left'
                                                />


                                                <GPSelectInput

                                                    style={{ minWidth: "196px", height: "40px", margin: 0 }}
                                                    label="Dificulty"
                                                    placeholder="-----------"
                                                    labelPosition='left'

                                                />


                                            </Col>


                                            <Col lg="4" >

                                                <GPSelectInput

                                                    style={{ minWidth: "196px", height: "40px", margin: 0 }}
                                                    label="Category"
                                                    placeholder="Category Type"
                                                    labelPosition='left'

                                                />

                                                <GPSelectInput

                                                    style={{ minWidth: "196px", height: "40px", margin: 0 }}
                                                    label="Class"
                                                    placeholder="-----------"
                                                    labelPosition='left'

                                                />

                                                <GPSelectInput

                                                    style={{ minWidth: "196px", height: "40px", margin: 0 }}
                                                    label="Stage"
                                                    placeholder="-----------"
                                                    labelPosition='left'

                                                />
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>

                                {/* text area region */}

                                <div style={{ width: "100%" }}>

                                    <CustomTextInput
                                        style={{ width: "50%", height: "85px", marginTop: "30px" }}
                                        label="Exra Information"
                                        placeholder="Eg: French,Indian,Italian"
                                        labelPosition='left'
                                        as="textarea"
                                        rows={3}
                                    />

                                </div>

                            </div>

                        </Tab>

                        <Tab eventKey="inventory" title="Inventory" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", minHeight: "100px" }} tabClassName="tab">
                            <div style={{ width: "100%", minHeight: "100px", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingLeft: "40px" }}>
                                <GPCheckBox
                                    label="Set Recipe Stockable"
                                    labelTop={false}
                                />
                            </div>
                        </Tab>



                        <Tab eventKey="portioning" title="Portioning" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", minHeight: "100px" }} tabClassName="tab">
                            <Container>
                                <Row>

                                    <Col lg="4">
                                        <div style={{ width: "100%", minHeight: "250px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "40px", paddingTop: "40px" }}>

                                            <GPCheckBox
                                                labelTop={false}
                                            />

                                            <div style={{ marginLeft: "40px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: 400 }}>
                                                    This is a semi-finished product
                                                </div>
                                                <div style={{ fontSize: "12px", fontWeight: 300 }}>
                                                    When checked the recipe can be used as a sub recipe in other recipes
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg="4">

                                        <div style={{ width: "100%", minHeight: "250px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "40px", paddingTop: "40px" }}>

                                            <div style={{ marginLeft: "40px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: 400 }}>
                                                    # Portions (Required)
                                                </div>
                                                <div>
                                                    <CustomTextInput
                                                        style={{ width: "200px", height: "40px" }}
                                                    />
                                                </div>
                                                <div style={{ fontSize: "12px", fontWeight: 300 }}>
                                                    When checked the recipe can be used as a sub recipe in other recipes
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg="4">

                                        <div style={{ width: "100%", minHeight: "250px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", paddingLeft: "40px", paddingTop: "40px" }}>

                                            <div style={{ marginLeft: "40px" }}>
                                                <div style={{ fontSize: "16px", fontWeight: 400 }}>
                                                    Net Measurement Info (Required)
                                                </div>

                                                <div style={{ fontSize: "12px", fontWeight: 300 }}>
                                                    <GPCheckBox
                                                        label="I want to enter weight and volume manually"
                                                        labelTop={false}
                                                    />
                                                </div>

                                                <div>

                                                    <div style={{ display: "flex" }}>

                                                        <CustomTextInput
                                                            style={{ width: "100px" }}
                                                            label="Weight"
                                                            placeholder="100,1000,..."
                                                        />

                                                        <CustomTextInput
                                                            style={{ width: "100px" }}
                                                            label="."
                                                            placeholder="g,kg,..."
                                                        />

                                                    </div>


                                                    <div style={{ display: "flex", width: "100%" }}>

                                                        <CustomTextInput
                                                            style={{ width: "100px" }}
                                                            label="Volume"
                                                            placeholder="100,1000,..."
                                                        />

                                                        <CustomTextInput
                                                            style={{ width: "100px" }}
                                                            label="."
                                                            placeholder="ml ,ltr,..."
                                                        />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>

                            </Container>


                        </Tab>



                        <Tab eventKey="production" title="Production" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", minHeight: "200px" }} tabClassName="tab">
                            <div style={{ display: "flex", alignItems: "center", width: "100%", minHeight: "200px" }}>
                                <Container>
                                    <Row>
                                        <Col lg="4">

                                            <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="Production Prep Time"
                                                    placeholder="Mins"
                                                />

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="."
                                                    placeholder="Sec"
                                                />

                                            </div>
                                            <div>Preparation Time for 1 Portion</div>
                                        </Col>

                                        <Col lg="4">

                                            <div style={{ display: "flex", width: "100%" }}>

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="Production Cooking Time"
                                                    placeholder="Mins"
                                                />

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="."
                                                    placeholder="Sec"
                                                />

                                            </div>
                                            <div>Cooking Time for 1 Portion</div>
                                        </Col>

                                        <Col lg="4">

                                            <div style={{ display: "flex", width: "100%" }}>

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="Plating Prep Time"
                                                    placeholder="Mins"
                                                />

                                                <CustomTextInput
                                                    style={{ width: "100px" }}
                                                    label="."
                                                    placeholder="Sec"
                                                />

                                            </div>
                                            <div>Plating Time for 1 Portion</div>
                                        </Col>


                                    </Row>
                                </Container>
                            </div>
                        </Tab>





                        <Tab eventKey="outlets" title="Outlets" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", minHeight: "200px" }} tabClassName="tab">
                            <div style={{padding:"40px"}}>
                                <div style={{ fontSize: "20px", fontWeight: 500,marginBottom:"22px" }}>
                                    Select Outlet in which this recipe will be accessible and active
                                </div>

                                <div style={{display:"flex"}}>
                                    <div style={{marginRight:"22px"}}>
                                    <GPCheckBox
                                        label="Bake my day Entebbe"
                                        labelTop={false}
                                    />
                                    </div>

                                    <GPCheckBox
                                        label="Bake my day Ntinda"
                                        labelTop={false}
                                    />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="images" title="Images" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                            
                        </Tab>

                    </Tabs>



                    {/* Add ingredients section */}

                    <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)", width: "100%", minHeight: "200px", marginTop: "15px", padding: "15px" }} >
                        <div style={{ fontSize: "30px", fontWeight: 400, marginBottom: "22px" }}>
                            Ingredients
                        </div>
                        <AddIngredientsTable />
                    </div>



                </div>
            </div>

        </GPLayout>
    )
}

export default NewRecipe