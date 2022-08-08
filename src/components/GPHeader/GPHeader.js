import React from "react";
import Logo from "../../assets/icons/LogoLight.svg";
import { SettingIcon } from "../GPIcon";
import "./header.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

import GPBreadcrumb from "../GPBreadcrumb";

function GPHeader() {
  return (
    <header className="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0 shadow">
      <a
        className="navbar-brand bg-sidebar col-md-3 col-lg-2 me-0 px-3 fs-6"
        href="#"
      >
        <img src={Logo} width={220} className="p-2" alt="" />
      </a>

      {/* <div className="d-flex justify-content-start">
        <SettingIcon /> Settings Employee Setup
      </div> */}

      <div className="nav-item d-flex">
        <SettingIcon />
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <button
        className="navbar-toggler bg-dark position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <input
        className="form-control form-control-dark w-100 rounded-0 border-0"
        type="text"
        placeholder="Search"
        aria-label="Search"
      /> */}

      {/* <div className="nav-item dropdown dropstart">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            className="rounded-circle"
            width={50}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHYZXcaG3AOzw/profile-displayphoto-shrink_100_100/0/1651188995246?e=1665619200&v=beta&t=KMVBUWaAO5gQFHMgeE2ei52nghOnbQRAYYm6hvqEgMo"
            alt=""
          />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div> */}

      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <Link to="/login">
            <img
              className="rounded-circle"
              width={50}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHYZXcaG3AOzw/profile-displayphoto-shrink_100_100/0/1651188995246?e=1665619200&v=beta&t=KMVBUWaAO5gQFHMgeE2ei52nghOnbQRAYYm6hvqEgMo"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default GPHeader;
