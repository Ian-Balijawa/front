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
import GPLayout from '../../../components/GPLayout';
import CustomButton from '../../../components/CustomButton/CustomButton';

const ViewSupplier = () => {

    //u can pass company details from the props and replace this 
    const details = {
        company: "Nico&Nic Supplies",
        email: "info@nicandnicosupplies.com",
        name: "Grace Moris",
        address: "Sanlam road",
        mobile: "0779744583",
        phone: "000045666",
        TIN: "000456849"
    }

    const ListItem = ({ objectKey, value }) => (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px" }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "10px" }}>
                {objectKey}
            </div>

            <div style={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "10px" }}>
                {value}
            </div>

        </div>
    )


    return (
        <GPLayout>
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
                                                            <th style={{ border: 0 }}>Latest Orders</th>
                                                            <th style={{ border: 0 }}></th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Orders in progress</td>
                                                            <td>Started at</td>
                                                        </tr>
                                                        <tr>
                                                            <td>NA</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delivered Orders</td>
                                                            <td >Delivered On</td>
                                                        </tr>

                                                        <tr>
                                                            <td>NA</td>
                                                            <td></td>
                                                        </tr>

                                                        <tr>
                                                            <td>Outstanding Orders(Not Delivered yet)</td>
                                                            <td >Delivered On</td>
                                                        </tr>

                                                        <tr>
                                                            <td>NA</td>
                                                            <td></td>
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

                            <div className='content-wrapper' style={{ paddingTop: "10px", paddingBottom: "10px" }}>

                                <Container>

                                    <Row >
                                        <Col lg="6" style={{ display: "flex", justifyContent: "flex-start" }}>

                                            <div style={{}}>

                                                <ListItem objectKey="Company" value={details.name} />
                                                <ListItem objectKey="Email" value={details.email} />
                                                <ListItem objectKey="Name" value={details.name} />
                                                <ListItem objectKey="Adress" value={details.address} />
                                                <ListItem objectKey="Mobile" value={details.mobile} />
                                                <ListItem objectKey="Phone" value={details.phone} />
                                                <ListItem objectKey="Tin" value={details.TIN} />

                                            </div>

                                        </Col>

                                        <Col lg="6">
                                            <div style={{ display: "flex", justifyContent: "flex-end", items: "center", }}>
                                                <CustomButton
                                                    title="Edit"
                                                    withBackground={false}
                                                    style={{ width: "70px", height: "40px" }}
                                                />

                                                <CustomButton
                                                    title="Remove"
                                                    withBackground={false}
                                                    style={{ width: "90px", height: "40px" }}
                                                />


                                            </div>

                                        </Col>


                                    </Row>
                                </Container>
                            </div>

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
        </GPLayout >
    )
}

export default ViewSupplier