import React, { useState } from "react";
import "./css/Main.css";
import Chip from "./Chip";
import PlayingField from "./PlayingField";

const Main = ({ setScore }) => {
  // const chips = ["paper", "scissors", "rock"];
  const chips = ["paper", "scissors", "rock", "lizard", "spock"];
  const [selected, setSelected] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickChip = (type) => {
    setSelected(type);
    setIsPlaying(true);
  };

  return (
    <main>
      {selected && isPlaying ? (
        <PlayingField
          chips={chips}
          selected={selected}
          setScore={setScore}
          setIsPlaying={setIsPlaying}
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
