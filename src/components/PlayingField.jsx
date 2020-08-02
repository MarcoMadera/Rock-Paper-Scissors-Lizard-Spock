import React, { useEffect, useState } from "react";
import Chip from "./Chip";
import PlayAgainButton from "./PlayAgainButton";
import "./css/PlayingField.css";
import PropTypes from "prop-types";

const PlayingField = ({
  selected,
  reset,
  randomChip,
  winner,
  result,
  show,
}) => {
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
  }, []);

  return (
    <div className="selector" tabIndex={show ? "-1" : ""}>
      <div className="selector-encounter">
        <p>YOU PICKED</p>
        <Chip
          type={selected}
          winner={winner.player}
          showResults={showResults}
        />
      </div>
      {randomChip && showRandom ? (
        <>
          <div className="selector-encounter">
            <p>THE HOUSE PICKED</p>
            <Chip
              type={randomChip}
              winner={winner.house}
              showResults={showResults}
            />
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
  show: PropTypes.bool,
};

export default PlayingField;
