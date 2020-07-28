import React from "react";
import "./css/PlayAgainButton.css";

const PlayAgainButton = ({ setIsPlaying }) => {
  return (
    <button className="PlayAgainButton" onClick={() => setIsPlaying(false)}>
      <p>PLAY AGAIN</p>
    </button>
  );
};
export default PlayAgainButton;
