import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import GPBlockButton from '../../components/GPBlockButton'
import GPLayout from '../../components/GPLayout/GPLayout'
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
                    <div style={{ height: "40px", fontSize: '16px' }} >
                        Create a new Recipe
                    </div>

                    <div style={{ display: "flex", fontSize: "12px" }}>
                        Recipe title
                        <input style={{ marginLeft: "10px" }}></input>
                    </div>

                </div>

                <div className='new-recipe-general-cont' style={{ paddingTop: "23px" }}>
                    {/* tabs */}

                    <Tabs
                        defaultActiveKey="progress"
                        id="order-list"
                        className="mb-3"
                    >
                        <Tab eventKey="general" title="General" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                            <div className='new-recipe-tab-1-wrapper' style={{padding:"40px"}}>

                                <div className='new-recipe-tab-input-cont' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

                                    <div style={{display:'flex',flexDirection:"column",justifyContent:"space-between", alignItems:"center",height:"100px"}}>

                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> EAN/UPC</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> System Id</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> Custom Id</div> <input/>   </div>

                                    </div>

                                    <div style={{display:'flex',flexDirection:"column",justifyContent:"space-between", alignItems:"center",height:"100px"}}>
                                        
                                    <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> EAN/UPC</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> System Id</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> Custom Id</div> <input/>   </div>
                                    </div>

                                    <div style={{display:'flex',flexDirection:"column",justifyContent:"space-between", alignItems:"center",height:"100px"}}>
                                       
                                    <div style={{display:'flex',alignItems:"center",padding:"10px"}}> 
                                     <div style={{marginRight:"60px"}}> EAN/UPC</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> System Id</div> <input/>   </div>
                                        <div style={{display:'flex',alignItems:"center"}}>  <div style={{marginRight:"60px"}}> Custom Id</div> <input/>   </div>
                                    </div>

                                </div>

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