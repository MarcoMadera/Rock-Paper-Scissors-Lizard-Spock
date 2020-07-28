import React, { useEffect } from "react";
import Chip from "./Chip";
import PlayAgainButton from "./PlayAgainButton";
import "./css/PlayingField.css";
const PlayingField = ({ chips, selected, setScore, setIsPlaying }) => {
  const randomChip = chips[Math.round(Math.random() * (chips.length - 1))];
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
      useEffect(() => setScore((value) => value + 1));
      return "You Win";
    } else {
      if (s === r) {
        return "DRAW";
      } else {
        return "You Lose";
      }
    }
  };
  return (
    <main className="selector">
      <div className="">
        <Chip type={selected} />
        <p>You selected</p>
      </div>
      <div className="">
        <Chip type={randomChip} />
        <p>The house selected</p>
      </div>
      <h1>{result(selected, randomChip)}</h1>
      <PlayAgainButton setIsPlaying={setIsPlaying} />
    </main>
  );
};

export default PlayingField;
