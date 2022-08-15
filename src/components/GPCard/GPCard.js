import React from 'react'
import Card from 'react-bootstrap/Card';

const GPCard = ({children,classes}) => {
  return (

      <div
        style={styles.card}
        className={`${classes}`}
      >  
        <div>
            {children}
        </div>
      </div>
  )
}

export default GPCard

const styles = {
   card:{
     backgroundColor:"#FFFEFE",
     border:"0.5px solid #CBCBCB",
     borderRadius:"6px",
     boxShadow:"0px 6px 15px 3px rgba(84, 84, 84, 0.1)",
     width:"100%"


   }
}