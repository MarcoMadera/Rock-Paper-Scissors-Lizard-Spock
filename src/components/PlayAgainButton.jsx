import React from "react";
import "./css/PlayAgainButton.css";
import PropTypes from "prop-types";

const PlayAgainButton = ({ reset, show }) => {
  return (
    <button className="PlayAgainButton" onClick={() => reset()} aria-label="Play again" tabIndex={show ? "-1" : undefined}>
      PLAY AGAIN
    </button>
  );
};

PlayAgainButton.propTypes = {
  reset: PropTypes.func,
  show: PropTypes.bool,
};
export default PlayAgainButton;
