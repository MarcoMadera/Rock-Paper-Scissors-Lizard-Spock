import React from "react";
import "./css/Header.css";
import Logo from "./images/Logo";
export default ({ score }) => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo width={83} height={48} className="header__logo" />
        <div className="header__score">
          <p>SCORE</p>
          <h1>{score}</h1>
        </div>
      </div>
    </header>
  );
};
