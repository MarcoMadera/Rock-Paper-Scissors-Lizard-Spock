import React, { useEffect } from "react";
import Chip from "./Chip";
import PlayAgainButton from "./PlayAgainButton";
import "./css/PlayingField.css";
const PlayingField = ({
  randomChip,
  selected,
  setScore,
  setIsPlaying,
  setWinner,
  winner,
}) => {
  const result = (s, r) => {
    if (
      (s === "scissors" && r === "paper") ||
      (s === "paper" && r === "rock") ||
      (s === "rock" && r === "lizard") ||
      (s === "lizard" && r === "spock") ||
      (s === "spock" && r === "scissors") ||
      (s === "scissors" && r === "lizard") ||
      (s === "paper" && r === "spock") ||
      (s === "rock" && r === "scissors") ||
      (s === "lizard" && r === "paper") ||
      (s === "spock" && r === "rock")
    ) {
      useEffect(() => {
        setScore((value) => value + 1);
        setWinner({ player: true, house: false });
      }, []);
      return "You Win";
    } else {
      if (s === r) {
        useEffect(() => setWinner({ player: false, house: false }), []);
        return "DRAW";
      } else {
        useEffect(() => {
          setScore((value) => value - 1);
          setWinner({ player: false, house: true });
        }, []);
        return "You Lose";
      }
    }
  };
  return (
    <div className="selector">
      <div className="">
        <Chip type={selected} winner={winner.player} />
        <p>YOU PICKED</p>
      </div>
      {randomChip ? (
        <>
          <div>
            <Chip type={randomChip} winner={winner.house} />
            <p>THE HOUSE PICKED</p>
          </div>
          <h1 className="results">{result(selected, randomChip)}</h1>
          <PlayAgainButton setIsPlaying={setIsPlaying} />
        </>
      ) : (
        <span className="default-piece"></span>
      )}
    </div>
  );
};

export default PlayingField;
