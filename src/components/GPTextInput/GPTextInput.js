import React from "react";
import { Col, Form } from "react-bootstrap";

function GPTextInput({ id, label, register, errors, ...props }) {
  return (
    <>
      <Form.Group as={Col} className="mb-2" controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} {...register(id)} />
        <small className="text-danger">
          {errors[id] && errors[id].message}
        </small>
        <Form.Control.Feedback type="invalid">
          {errors[id] && errors[id].message}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}

export default GPTextInput;
