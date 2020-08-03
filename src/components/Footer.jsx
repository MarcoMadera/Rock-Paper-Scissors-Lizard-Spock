import React from "react";
import "./css/Footer.css";
import PropTypes from "prop-types";

const Footer = ({ onClick, onClickGame, show }) => {
  return (
    <footer className="Footer" aria-hidden={show ? "true" : "false"}>
      <button
        className="footer__game"
        onClick={() => onClickGame()}
        tabIndex={show ? "-1" : undefined}
      >
        MODE
      </button>
      <button
        className="footer__rules"
        onClick={() => onClick()}
        tabIndex={show ? "-1" : undefined}
      >
        RULES
      </button>
    </footer>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func,
  onClickGame: PropTypes.func,
  show: PropTypes.bool,
};

export default Footer;
