import { DatePicker } from 'antd';
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../inventory.css"
import GPBlockButton from '../../../components/GPBlockButton/GPBlockButton';

const ViewSupplier = () => {
    return (
        <div className='view-supplier-main'>

            <div className='view-supplier-name-container'>

                Nic&Nico Supplies

            </div>

            <div className='view-supplier-tab-container'>

                <Tabs
                    defaultActiveKey="dashboard"
                    id="view-supplier"
                    className="mb-3"
                >
                    <Tab eventKey="dashboard" title="Supplier Dashboard" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">

                        <div className='date-picker-container'>
                            <DatePicker
                                placeholder='Filter Orders'
                            />
                        </div>

                        <div className='content-wrapper'>

                            <Container>

                                <Row>
                                    <Col lg="3">

                                        <div className='content-tab'>

                                            <p>Total order value</p>

                                            <h4>N/A</h4>

                                            <p>0 orders placed</p>

                                        </div>

                                    </Col>
                                    <Col lg="3">

                                        <div className='content-tab'>

                                            <p>Total order value</p>

                                            <h4>N/A</h4>

                                            <p>0 orders placed</p>

                                        </div>
                                    </Col>
                                    <Col lg="6">

                                        <div className='table-container'>

                                            <Table striped bordered hover>
                                                <thead>

                                                    <tr>
                                                        <th>Latest Orders</th>
                                                        <th>First Name</th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td colSpan={2}>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>


                                    </Col>
                                </Row>
                            </Container>








                        </div>


                    </Tab>
                    <Tab eventKey="contact" title="Contact Details" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                        <Container>
                            <Row>
                                <Col lg="8">

                                    <Row>
                                        <Col lg="6">
                                            Company
                                        </Col>

                                        <Col lg="6">
                                            Nic&Nico Supplies
                                        </Col>

                                    </Row>

                                </Col>

                                <Col lg="4">

                                <Row>
                                        <Col lg="4">
                                        <GPBlockButton
                                             title="Edit"
                                             gpClassName="view-btn"
                                           />
                                        </Col>

                                        <Col lg="4">
                                          
                                          
                                          <GPBlockButton 
                                             title="Remove"
                                             gpClassName="view-btn"
                                             
                                          />

                                          
                                        
                                        </Col>
                               </Row>

                                </Col>
                            </Row>
                            
                        </Container>
                    </Tab>
                    <Tab eventKey="delivery" title="Delivery Details" tabClassName="tab" disabled>
                        huuu
                    </Tab>

                    <Tab eventKey="ingredients" title="Ingredient list" tabClassName="tab" disabled>
                        huuu
                    </Tab>
                </Tabs>

            </div>

        </div>
    )
}

export default ViewSupplier