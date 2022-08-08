import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function GPBreadcrumb(props) {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav>
      <Breadcrumb>
        {props.crumbs.map((crumb, index) => {
          const active = isLast(index) ? "active" : "";

          return (
            <span key={index}>
              <Breadcrumb.Item href={crumb.href} {...active}>
                {crumb.text}
              </Breadcrumb.Item>
            </span>
          );
        })}
      </Breadcrumb>

      {/* <ol>
        {props.crumbs.map((crumb, index) => {
          const disabled = isLast(index) ? "disabled" : "";

          return (
            <li key={index} className="breadcrumb-item align-items-center">
              <a href={crumb.href}>{crumb.text}</a>
            </li>
          );
        })}
      </ol> */}
    </nav>
  );
}

export default GPBreadcrumb;
