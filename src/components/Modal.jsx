import React from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";
import Rules from "./images/Rules";
import Close from "./icons/Close";

function Modal(props) {
  const { show, closeModal } = props;

  const modal = (
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
