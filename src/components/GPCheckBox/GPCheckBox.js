import React from 'react'
import Form from 'react-bootstrap/Form';
import './checkbox.css'


const GPCheckBox = () => {
  return (
   


    <Form>
      
        <div key={`reverse-checkbox`} className="mb-3">
          <div className="x">Billions</div>
          <Form.Check
            custom
            label="SEEE x"
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