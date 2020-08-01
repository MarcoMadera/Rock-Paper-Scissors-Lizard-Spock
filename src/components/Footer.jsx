import React from "react";
import "./css/Footer.css";
import PropTypes from "prop-types";

const Footer = ({ onClick, onClickGame }) => (
  <div className="Footer">
    <div className="button__container">
      <div className="footer__game" onClick={() => onClickGame()}>
        <p>GAME</p>
      </div>
    </div>
    <div className="button__container">
      <div className="footer__rules" onClick={() => onClick()}>
        <p>RULES</p>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  onClick: PropTypes.func,
  onClickGame: PropTypes.func,
};

export default Footer;
