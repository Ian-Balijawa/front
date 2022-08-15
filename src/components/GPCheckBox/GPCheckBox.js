import React from 'react'
import Form from 'react-bootstrap/Form';
import './checkbox.css'


const GPCheckBox = ({label,labelTop}) => {
  return (
   


    <Form>
      
        <div key={`reverse-checkbox`} className="mb-3">
          <div style={{color:"#7a7a7a",fontSize:"14px"}}>
            {
             labelTop ? label : null
            }
          </div>
          <Form.Check
            custom
            label={!labelTop?label:null}
            name="group1"
            type="checkbox"
            id={`reverse-checkbox-1`}
            style={styles.box}
            className="check"
          />
      
         
        </div>
      
    </Form>

  )
}

export default GPCheckBox

const styles = {
    box:{
        "&:cheked":{
           backgroundColor:"#E46036",
           borderColor:"#E46036"
        }
    },

}