import React from 'react'
import Form from 'react-bootstrap/Form';
import './custom-theme-input.css'


/*
*  Change the position of the label by:
   passing "labelPosition" prop and setting it to "left" or "top", top- is default
*/

const CustomTextInput = ({value,onChange,placeholder,label,style,gpClassName,labelPosition="top"}) => {
  return (

    <Form>
    <Form.Group className='mb-2' controlId="form-gp-1" style={{display:labelPosition ==="left" ? "flex":"block",alignItems:"center"}}>
    {labelPosition === "top" ? <Form.Label>
        {label}
    </Form.Label>:
     <Form.Label style={{marginRight:labelPosition ==="left" ? "5px":"0px",minWidth:"80px"}}>
     {label}
    </Form.Label>
    }
    <Form.Control 
       type="text" 
       placeholder={placeholder}
       value={value}
       onChange={onChange}
       style={style}
       className={`custom-theme-text-input ${gpClassName}`}
       />

       </Form.Group> 
    </Form>
      
  )
}

export default CustomTextInput