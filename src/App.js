import React, { Fragment, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const onClickRules = () => {
    openModal();
  };
  const [score, setScore] = useState(0);

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  return (
    <Fragment>
      <Modal closeModal={closeModal} show={show} />
      <Header score={score} />
      <Main setScore={setScore} />
      <Footer
        onClick={onClickRules}
        openModal={openModal}
        closeModal={closeModal}
        show={show}
      />
    </Fragment>
  );
};

export default App;
