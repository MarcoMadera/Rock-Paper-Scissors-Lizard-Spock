import React from "react";
import "./css/Header.css";
import Logo from "./images/Logo";
import LogoBonus from "./images/LogoBonus";
import PropTypes from "prop-types";
const Header = ({ classicalScore, bonusScore, game, show }) => {
  return (
    <header className="header" aria-hidden={show ? "true" : ""} tabIndex={show ? "-1" : ""}>
      {game && 
      <div className="header__container">
        {game === "bonus" ? (
          <LogoBonus
            width={83}
            height={48}
            className="header__logo logomodal"
          />
        ) : (
          <Logo width={83} height={48} className="header__logo " />
        )}
        <div className="header__score">
          <p>SCORE</p>
          <h1>{game === "bonus" ? bonusScore : classicalScore}</h1>
        </div>
      </div>
      }
    </header>
  );
};

Header.propTypes = {
  classicalScore: PropTypes.number,
  bonusScore: PropTypes.number,
  game: PropTypes.string,
  show: PropTypes.bool,
};
export default Header;
