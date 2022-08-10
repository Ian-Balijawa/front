
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GPModal = ({title,children}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
          
            <Modal.Title>Modal heading</Modal.Title>
            <Button
                style={styles.closeBtn}
                onClick={()=>{handleClose()}}
                 > X </Button>
            
          </Modal.Header>
          
          <Modal.Body>
            {
              children
            }
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    )
}

export default GPModal

const styles = {
    header:{
        height:"85px",
        backgroundColor:"#F1EDE5"
    },
    title:{
        width:"100%",
        fontSize:"28px",
        fontWeight:700,
    },
    closeBtn:{
      width:"50px",
      height:"50px",
      background:"#CBCBCB",
      borderRadius:"4px"

    }
}