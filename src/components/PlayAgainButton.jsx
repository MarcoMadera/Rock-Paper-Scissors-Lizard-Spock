import React from "react";
import "./css/PlayAgainButton.css";
import PropTypes from "prop-types";

const PlayAgainButton = ({ reset }) => {
  return (
    <button className="PlayAgainButton" onClick={() => reset()}>
      <p>PLAY AGAIN</p>
    </button>
  );
};

PlayAgainButton.propTypes = {
  reset: PropTypes.func,
};
export default PlayAgainButton;
