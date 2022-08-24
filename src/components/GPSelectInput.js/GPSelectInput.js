import React from "react"
import Form from 'react-bootstrap/Form';

function GPSelectInput({ handleChange, label, placeholder, name, arrayOfData, error, labelPosition = "top", labelStyles, ...rest }) {


    return (
       <Form>
         <Form.Group className='mb-2' controlId="form-gp-2" style={{ display: labelPosition === "left" ? "flex" : "block", alignItems: "center" }}>
                {labelPosition === "top" ? <Form.Label>
                    {label}
                </Form.Label> :
                    <Form.Label style={{ marginRight: labelPosition === "left" ? "5px" : "0px", minWidth: "80px" }}>
                        {label}
                    </Form.Label>
                }
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
       </Form>
    )
}

export default GPSelectInput
