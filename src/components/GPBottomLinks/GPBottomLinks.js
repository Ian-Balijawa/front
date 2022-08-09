import React from "react";
import { Link } from "react-router-dom";

function GPBottomLinks() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <span>
          Questions? <Link to="/">Visit Help</Link>
        </span>

        <span>
          New to GOLDPOS?{" "}
          <Link to="/register" className="my-3">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default GPBottomLinks;
