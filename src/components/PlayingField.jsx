import React, { useEffect, useState } from "react";
import Chip from "./Chip";
import PlayAgainButton from "./PlayAgainButton";
import "./css/PlayingField.css";
import PropTypes from "prop-types";

const PlayingField = ({ selected, reset, randomChip, winner, result }) => {
  const [showResults, setShowResults] = useState(false);
  const [showRandom, setShowRandom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      result();
      setShowResults(true);
    }, 1000);
    setTimeout(() => {
      setShowRandom(true);
    }, 400);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="selector">
      <div className="selector-encounter">
        <Chip
          type={selected}
          winner={winner.player}
          showResults={showResults}
        />
        <p>YOU PICKED</p>
      </div>
      {randomChip && showRandom ? (
        <>
          <div className="selector-encounter">
            <Chip
              type={randomChip}
              winner={winner.house}
              showResults={showResults}
            />
            <p>THE HOUSE PICKED</p>
          </div>
          {showResults && (
            <div className="finalResults">
              <h1 className="results">
                {!winner.player && !winner.house
                  ? "Draw"
                  : winner.player
                    ? "You Win"
                    : "You Lose"}
              </h1>
              <PlayAgainButton reset={reset} />
            </div>
          )}
        </>
      ) : (
        <span className="default-piece"></span>
      )}
    </div>
  );
};

PlayingField.propTypes = {
  selected: PropTypes.string.isRequired,
  reset: PropTypes.func,
  randomChip: PropTypes.string.isRequired,
  winner: PropTypes.object,
  result: PropTypes.func,
};

export default PlayingField;
