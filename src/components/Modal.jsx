import React from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";
import Rules from "./images/Rules";
import RulesBonus from "./images/RulesBonus";
import Close from "./icons/Close";
import Logo from "./images/Logo";
import LogoBonus from "./images/LogoBonus";

function Modal({
  show,
  closeModal,
  game,
  setGame,
  classicalScore,
  bonusScore,
}) {
  const modal = !game ? (
    <div className="modal__container">
      <div onClick={closeModal} />
      <div
        className="modal"
        style={{
          background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}
      >
        <h1 className="modal__selectGame">Choose a game</h1>

        <div
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
        </div>

        <div
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
        </div>
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
        <Close
          onClick={() => {
            closeModal();
          }}
          className="modal__close"
        />
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
