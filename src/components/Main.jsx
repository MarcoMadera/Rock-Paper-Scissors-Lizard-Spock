import React, { useState, useEffect } from "react";
import "./css/Main.css";
import Chip from "./Chip";
import PlayingField from "./PlayingField";

const Main = ({ setScore }) => {
  const [chips, setChips] = useState(["rock", "paper", "scissors"]);
  useEffect(() => {
    setChips(["paper", "scissors", "rock", "lizard", "spock"]);
  }, []);
  const [selected, setSelected] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomChip, setRandomChip] = useState();
  const [winner, setWinner] = useState({ player: false, house: false });
  const timeout = (ms) => () =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onClickChip = (type) => {
    setSelected(type);
    setIsPlaying(true);
    Promise.resolve(setRandomChip())
      .then(timeout(1000))
      .then(() =>
        setRandomChip(chips[Math.round(Math.random() * (chips.length - 1))])
      );
  };

  return (
    <main>
      {selected && isPlaying ? (
        <PlayingField
          selected={selected}
          setScore={setScore}
          setIsPlaying={setIsPlaying}
          randomChip={randomChip}
          winner={winner}
          setWinner={setWinner}
        />
      ) : (
        !isPlaying && (
          <div className="selector">
            {chips.map((chip) => (
              <Chip type={chip} onClick={onClickChip} key={chip} />
            ))}
          </div>
        )
      )}
    </main>
  );
};

export default React.memo(Main);
