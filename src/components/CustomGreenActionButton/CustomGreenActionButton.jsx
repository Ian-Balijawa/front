import React from 'react'

const CustomGreemActionButton = ({count}) => {
  return (
    <div style={styles.main}>
       {count?count:"N/A"}
    </div>
  )
}

export default CustomGreemActionButton

const styles = {
    main:{
      width:"35px",
      height:"22px",
      background:"#56AE57",
      color:"#fff",
      fontSize:"12px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:"3px"

    }
}