import React from "react";
import { Button } from "react-bootstrap";

function GPBlockButton({ title, to, classes, ...props }) {
  return (
    <div>
      <div className="d-grid gap-2">
        <Button {...props} className={`btn ${classes}`}>
          {title}
        </Button>
      </div>
    </div>
  );
}

export default GPBlockButton;
