import React from "react";
import "./css/Footer.css";
export default ({ onClick }) => (
  <div className="footer" onClick={() => onClick()}>
    <p>RULES</p>
  </div>
);
