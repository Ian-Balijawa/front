import React from "react";
import Logo from "../../assets/LogoDark.svg";

function GPCardAuthHeader({ title }) {
  return (
    <div>
      <div className="text-center">
        <img src={Logo} width="220" className="img-fluid" alt="logo" />
        <hr className="divider" />
      </div>
      <p className="text-dark-50 mb-2 login__text">{title}</p>
    </div>
  );
}

export default GPCardAuthHeader;
