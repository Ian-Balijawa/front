import React, { useEffect } from 'react'
import GPModal from '../../../components/GPModal/GPModal'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GPTextInput from '../../../components/GPTextInput/GPTextInput';
import GPPhoneInput from '../../../components/GPPhoneInput/GPPhoneInput';


import Form from 'react-bootstrap/Form';

const AddNewSupplier = ({ show, handleClose }) => {


  return (
    <GPModal
      show={show}
      title={"Add New Supplier"}
      handleClose={handleClose}

    >


      <Form>

        <Container>
          <Row>
            <Col lg="4" md="4">
              Company*
            </Col>

            <Col lg="8" md="8" style={{ position: "relative" }}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  autoFocus
                />

              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="4" md="4">
              Contact Name
            </Col>

            <Col lg="4" md="4" style={{ position: "relative" }}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  autoFocus
                />

              </Form.Group>
            </Col>

            <Col lg="4" md="4" style={{ position: "relative" }}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  autoFocus
                />

              </Form.Group>
            </Col>

            <Col lg="4" md="4" style={{ position: "relative" }}>
              
              <GPPhoneInput placeholder="Phone Input too long" />
            
            </Col>


          </Row>


          <Row>
            <Col lg="4" md="4">
              Email
            </Col>

            <Col lg="8" md="8" style={{ position: "relative" }}>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Control
                  type="text"
                  placeholder="Email"

                />

              </Form.Group>
            </Col>
          </Row>




        </Container>

      </Form>


    </GPModal>
  )
}

export default AddNewSupplier