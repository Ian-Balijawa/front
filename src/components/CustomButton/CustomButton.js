import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'

import "./custom-theme-btn.css"

/*
* to render button without background
* pass "withBacground prop and set it to false"
*/


function CustomButton({url,onClick,title,gpClassNames,style,withBackground=true}) {

  const navigate = useNavigate() 

  return (
    <div onClick={()=> url ? navigate(url) : onClick()} >
      
      {
        withBackground ? <button 
         className={`gp-custom-theme-btn ${gpClassNames}`}
         style={style}
          >
        {title}
        </button> :

<button 
 style={style}
 className={`gp-custom-theme-btn btn-no-bg ${gpClassNames}`}
 
  >
{title}
</button>
      }
     
     
    </div>
  );
}

export default CustomButton;
