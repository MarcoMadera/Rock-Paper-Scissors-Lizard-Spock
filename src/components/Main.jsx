import React, { useState, useEffect } from "react";
import "./css/Main.css";
import Chip from "./Chip";
import PlayingField from "./PlayingField";
import PropTypes from "prop-types";

const Main = ({ setClassicalScore, game, setBonusScore }) => {
  const [chips, setChips] = useState(["paper", "scissors", "rock"]);
  const [selected, setSelected] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomChip, setRandomChip] = useState();
  const [winner, setWinner] = useState({ player: false, house: false });
  useEffect(() => {
    if (game === "bonus") {
      document.title = "Rock Paper Scissors Lizard Spock";
      setChips(["paper", "scissors", "rock", "lizard", "spock"]);
    }
    if (game === "classical") {
      document.title = "Rock Paper Scissors";
      setChips(["paper", "scissors", "rock"]);
    }
    if (!game) {
      document.title = "Frontend Mentor | Rock Paper Scissors";
    }
  }, [game]);

  const reset = () => {
    setIsPlaying(false);
    setWinner({ player: false, house: false });
  };

  const onClickChip = (type) => {
    setSelected(type);
    setIsPlaying(true);
    setRandomChip(chips[Math.round(Math.random() * (chips.length - 1))]);
  };

  const result = () => {
    if (
      (selected === "scissors" && randomChip === "paper") ||
      (selected === "paper" && randomChip === "rock") ||
      (selected === "rock" && randomChip === "lizard") ||
      (selected === "lizard" && randomChip === "spock") ||
      (selected === "spock" && randomChip === "scissors") ||
      (selected === "scissors" && randomChip === "lizard") ||
      (selected === "paper" && randomChip === "spock") ||
      (selected === "rock" && randomChip === "scissors") ||
      (selected === "lizard" && randomChip === "paper") ||
      (selected === "spock" && randomChip === "rock")
    ) {
      setWinner({ player: true, house: false });
      game === "bonus"
        ? setBonusScore((value) => value + 1)
        : setClassicalScore((value) => value + 1);
    } else {
      if (selected === randomChip) {
        setWinner({ player: false, house: false });
      } else {
        setWinner({ player: false, house: true });
        game === "bonus"
          ? setBonusScore((value) => value - 1)
          : setClassicalScore((value) => value - 1);
      }
    }
  };

  return (
    <main className="principal">
      {selected && isPlaying ? (
        <PlayingField
          selected={selected}
          reset={reset}
          randomChip={randomChip}
          winner={winner}
          result={result}
        />
      ) : (
        !isPlaying && (
          <div
            className={game === "bonus" ? "select-ChipsBonus" : "select-Chips"}
          >
            {chips.map((chip) => (
              <Chip type={chip} onClick={onClickChip} key={chip} />
            ))}
          </div>
        )
      )}
    </main>
  );
};

Main.propTypes = {
  setClassicalScore: PropTypes.func,
  setBonusScore: PropTypes.func,
  game: PropTypes.string,
};
export default Main;
