import React from "react";
import "./css/PlayAgainButton.css";
import PropTypes from "prop-types";

const PlayAgainButton = ({ reset }) => {
  return (
    <button className="PlayAgainButton" onClick={() => reset()} aria-label="Play again utton">
      PLAY AGAIN
    </button>
  );
};

PlayAgainButton.propTypes = {
  reset: PropTypes.func,
};
export default PlayAgainButton;
