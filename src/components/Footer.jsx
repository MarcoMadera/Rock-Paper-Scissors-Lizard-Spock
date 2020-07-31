import React from "react";
import "./css/Footer.css";
import PropTypes from "prop-types";

const Footer = ({ onClick }) => (
  <div className="footer" onClick={() => onClick()}>
    <p>RULES</p>
  </div>
);

Footer.propTypes = {
  onClick: PropTypes.func,
};

export default Footer;
