import React from "react"
import Form from 'react-bootstrap/Form';

function GPSelectInput({ handleChange, label, placeholder, name, arrayOfData, error, ...rest }) {


    return (
        <>

            <Form.Group>
                {label && <Form.Label style={{ fontSize: "14px", color: "#7a7a7a" }}>{label}</Form.Label>}
                <Form.Select onChange={handleChange} {...rest}>
                    <option>
                        {placeholder}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                {error && <div className="error">{error}</div>}
            </Form.Group>
        </>
    )
}

export default GPSelectInput
