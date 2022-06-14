import React from "react";
import HamburgerButton from "./HamburgerButton";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes.navbar}>
      <HamburgerButton onHamburgerBtnClick={props.onHamburgerBtnClick} />
      <h1>Alboy</h1>
    </div>
  );
};

export default NavBar;
