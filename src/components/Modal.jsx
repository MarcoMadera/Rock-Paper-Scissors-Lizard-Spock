import React, { useEffect, useCallback } from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";
import Rules from "./images/Rules";
import RulesBonus from "./images/RulesBonus";
import Close from "./icons/Close";
import Logo from "./images/Logo";
import LogoBonus from "./images/LogoBonus";

const Modal = ({
  show,
  closeModal,
  game,
  setGame,
  classicalScore,
  bonusScore,
}) => {
  const onPressEsc = useCallback((event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onPressEsc, false);

    return () => {
      document.removeEventListener("keydown", onPressEsc, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = !game ? (
    <div className="modal__container">
      <div onClick={closeModal} />
      <div
        className="modal"
        style={{
          background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}
      >
        <h1 className="modal__selectGame">Select game mode</h1>
        <button
          aria-label="Rock Paper Scissors Mode"
          className="header__container pointer"
          onClick={() => {
            setGame("classical");
            closeModal();
          }}
        >
          <Logo width={83} height={48} className="header__logo" />
          <div className="header__score">
            <p>SCORE</p>
            <h1>{classicalScore}</h1>
          </div>
        </button>
        <button
          aria-label="Rock Paper Scissors Lizard Spock Mode"
          className="header__container pointer"
          onClick={() => {
            setGame("bonus");
            closeModal();
          }}
        >
          <LogoBonus
            width={83}
            height={48}
            className="header__logo logomodal"
          />
          <div className="header__score">
            <p>SCORE</p>
            <h1>{bonusScore}</h1>
          </div>
        </button>
      </div>
    </div>
  ) : (
    <div className="modal__container">
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal mrules" : "hide"}>
        <h1 className="modal__rulesTitle">Rules</h1>
        {game === "bonus" ? (
          <RulesBonus className="rulesModal" />
        ) : (
          <Rules className="rulesModal" />
        )}
        <button
          className="modal__close"
          aria-label="Close Modal"
          tabIndex="1"
          onClick={() => {
            closeModal();
          }}
        >
          <Close />
        </button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
};

export default Modal;
