import React from "react";
import './GPPhoneInput.css'
import CountryCodes from '../../resources/CountryCodes.json'
const  GPPhoneInput =React.forwardRef(({name, placeholder, handleChange, handleSelectChange, className},ref)=> {
    return (
      <div className={`row mb-3 ${className}`}>
        <div className=" col-4">
        <select
            data-show-content="true"
            className="form-select form-select-phone"
            onChange={handleSelectChange}
            style={{
              width:'7em'
            }}
          >
            {CountryCodes.map((country)=>{
              return(
              <option value={country.dial_code}>
                {country.dial_code}
              </option>
              )
            })}
          </select>
        </div>
        <div className="col-8">
          <input 
          type={'text'}
          name={name} 
          placeholder={placeholder}
          ref={ref}
          className="form-control font-input"
          onChange={handleChange}
          style={{width: '31em'}}/>
        </div>
      </div>
    );
  
})

export default GPPhoneInput;
