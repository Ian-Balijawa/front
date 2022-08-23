import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'
import * as icons from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./custom-theme-btn.css"

/*
* to render button without background
* pass "withBacground prop and set it to false"
*/


function CustomButton({url,onClick,title,gpClassNames,style,withBackground=true,iconName}) {

  const navigate = useNavigate() 

  return (
    <div onClick={()=> url ? navigate(url) : onClick()} >
      
      {
        withBackground ? <button 
         className={`gp-custom-theme-btn ${gpClassNames}`}
         style={style}
          >
         {iconName &&  <FontAwesomeIcon icon={icons[iconName]} style={{marginRight:"5px"}}  />}
          {title}
        </button> :

<button 
 style={style}
 className={`gp-custom-theme-btn btn-no-bg ${gpClassNames}`}
 
  >
 {iconName &&  <FontAwesomeIcon icon={icons[iconName]} style={{marginRight:"5px"}}  />}
{title}
</button>
      }
     
     
    </div>
  );
}

export default CustomButton;
