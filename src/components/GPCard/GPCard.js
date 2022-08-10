import React from 'react'
import Card from 'react-bootstrap/Card';

const GPCard = ({children}) => {
  return (
      <Card>  
        <Card.Body>
            {children}
        </Card.Body>
      </Card>
  )
}

export default GPCard