import React from 'react'
import GPLayout from '../../../components/GPLayout/GPLayout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable';
import CustomButton from '../../../components/CustomButton/CustomButton';

const OrderList = () => {

    const columns = [
        { title: "Supplier", field: "supplier" },
        { title: "Order in progress by", field: "order_in_progress_by" },
        { title: "Order Started On", field: "order_started_on" },
        {
            title: "Actions", field: "actions", render: (rowData) => <CustomButton
                                                                            title="continue"
                                                                            withBackground={true}
                                                                            iconName="faArrowUp"
                                                                            style={{ color: "#fff", fontSize: "14px", borderRadius: "6px", width: "100px", height: "22px" }}

                                                                        />
        },
    ]


    const data = [
        { supplier: "Nico&Nic Suppliers", order_in_progress_by: "deusgrace@goldpos.com", order_started_on: "21/07/2022 12:00" },
        { supplier: "Nico&Nic Suppliers", order_in_progress_by: "deusgrace@goldpos.com", order_started_on: "21/07/2022 12:00" },
        { supplier: "Nico&Nic Suppliers", order_in_progress_by: "deusgrace@goldpos.com", order_started_on: "21/07/2022 12:00" },
        { supplier: "Nico&Nic Suppliers", order_in_progress_by: "deusgrace@goldpos.com", order_started_on: "21/07/2022 12:00" },
        { supplier: "Nico&Nic Suppliers", order_in_progress_by: "deusgrace@goldpos.com", order_started_on: "21/07/2022 12:00" },




    ]

    return (
        <GPLayout>
            <div className='order-list-main' style={{ padding: 0 }}>

                <div style={{ width: "100%", height: "80px", marginBottom: "15px", borderBottom: "1px solid #7a7a7a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>  Orders</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <CustomButton
                            title="Column Visibility"
                            withBackground={false}
                            iconName="faEye"
                            style={{ background: "#E2E2E2", color: "#000", fontSize: "14px", borderRadius: "6px", width: "180px", height: "40px" }}

                        />


                        <CustomButton
                            title="Receive External Orders"
                            withBackground={false}
                            iconName="faCartArrowDown"
                            style={{ background: "#E2E2E2", color: "#000", fontSize: "14px", borderRadius: "6px", minWidth: "180px", height: "40px" }}

                        />


                        <CustomButton
                            title="Procurement Report"
                            withBackground={false}
                            iconName="faBallot"
                            style={{ background: "#E2E2E2", color: "#000", fontSize: "14px", borderRadius: "6px", minWidth: "180px", height: "40px" }}

                        />


                        <CustomButton
                            title="Create Order"
                            withBackground={true}
                            iconName="faCartShopping"
                            style={{ color: "#fff", fontSize: "14px", borderRadius: "6px", minWidth: "100px", height: "40px" }}

                        />

                    </div>
                </div>

                <Tabs
                    defaultActiveKey="progress"
                    id="order-list"
                    className="mb-3"
                >
                    <Tab eventKey="progress" title="In Progress" tabClassName="tab">

                        <Container>
                            <Row>
                                <Col lg="6" md="6" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }}>

                                    <GPCustomTable
                                       data={data}
                                       columns={columns}
                                     />


                                </Col>

                                <Col lg="6" md="6">
                                    <div> Select an order </div>
                                    <div style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }}>
                                        Select an order on the left to view its content
                                    </div>
                                </Col>

                            </Row>

                        </Container>


                    </Tab>

                    <Tab eventKey="ordered" title="Ordered" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab">
                        "2"
                    </Tab>
                    <Tab eventKey="delivered" title="Delivered" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }} tabClassName="tab" disabled>
                        "3"
                    </Tab>
                </Tabs>

            </div>

        </GPLayout>
    )
}

export default OrderList