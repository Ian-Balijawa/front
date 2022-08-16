import React from 'react'
import Form from "react-bootstrap/Form";


const GPDatePicker = ({onChange,placeholder}) => {
  return (
    <div className="date-picker">
        
    <Form.Control
     type="date"
     placeholder={placeholder}
     onChange={onChange}
     >

     </Form.Control>

   </div>
  )
}

export default GPDatePicker