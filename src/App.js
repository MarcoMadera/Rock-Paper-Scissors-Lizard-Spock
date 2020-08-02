import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const onClickRules = () => {
    openModal();
  };
  const onClickGame = () => {
    setGame();
    openModal();
  };

  const [classicalScore, setClassicalScore] = useState(
    parseInt(localStorage.getItem("classicalScore"), 10) || 0
  );
  const [bonusScore, setBonusScore] = useState(
    parseInt(localStorage.getItem("bonusScore"), 10) || 0
  );

  useEffect(() => {
    localStorage.setItem("classicalScore", classicalScore.toString());
    localStorage.setItem("bonusScore", bonusScore.toString());
  }, [classicalScore, bonusScore]);

  const [show, setShow] = useState(true);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const [game, setGame] = useState();
  return (
    <Fragment>
      <Modal
        closeModal={closeModal}
        show={show}
        game={game}
        setGame={setGame}
        classicalScore={classicalScore}
        bonusScore={bonusScore}
      />
      <Header
        show={show}
        classicalScore={classicalScore}
        bonusScore={bonusScore}
        game={game}
      />
      <Main
        show={show}
        setClassicalScore={setClassicalScore}
        setBonusScore={setBonusScore}
        game={game}
      />
      <Footer onClick={onClickRules} onClickGame={onClickGame} show={show} />
    </Fragment>
  );
};

export default App;
