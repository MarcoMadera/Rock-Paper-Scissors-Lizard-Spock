import React from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";
import Rules from "./images/Rules";
import Close from "./icons/Close";
import Logo from "./images/Logo";
import LogoBonus from "./images/LogoBonus";

function Modal( { show, closeModal, game, setGame }) {

  const modal = !game ? (
    <div className="modal__container">
      <div className="overlay" onClick={closeModal} />
      <div
        className="modal"
        style={{
          background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}
      >
        <h1>Select a game</h1>
        <Logo
          width={300}
          height={200}
          onClick={() => {
            setGame("classical");
            closeModal();
          }}
        />
        <LogoBonus
          width={200}
          height={300}
          onClick={() => {
            setGame("bonus");
            closeModal();
          }}
        />
      </div>
    </div>
  ) : (
    <div className="modal__container">
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <h1>Rules</h1>
        <Rules />
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
