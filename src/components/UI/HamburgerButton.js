import React from "react";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <button
      className={classes["hamburger-btn"]}
      onClick={props.onHamburgerBtnClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default HamburgerButton;
