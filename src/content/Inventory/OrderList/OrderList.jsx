import React from 'react'
import GPLayout from '../../../components/GPLayout/GPLayout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GPCustomTable from '../../../components/GPCustomTable/GPCustomTable';

const OrderList = () => {
    return (
        <GPLayout>
            <div className='order-list-main'>



                <Tabs
                    defaultActiveKey="progress"
                    id="order-list"
                    className="mb-3"
                >
                    <Tab eventKey="progress" title="In Progress"  tabClassName="tab">

                        <Container>
                            <Row>
                                <Col lg="6" md="6" style={{ background: "#fff", boxShadow: "0px 6px 15px 3px rgba(84, 84, 84, 0.1)" }}>
                                  
                                  <GPCustomTable/>
                                  
                                
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