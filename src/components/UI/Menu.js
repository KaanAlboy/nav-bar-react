import React from "react";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const menuClasses = `${classes.menu} ${
    props.isVisible ? classes["menu-open"] : ""
  }`;

  return (
    <div className={menuClasses}>
      <div className={classes["close-btn-container"]}>
        <button
          className={classes["close-btn"]}
          onClick={props.onCloseBtnClick}
        >
          X
        </button>
      </div>
      <ul>
        <a>
          <li>Home</li>
        </a>
        <a>
          <li>About Me</li>
        </a>
        <a>
          <li>Portfolio</li>
        </a>
        <a>
          <li>Contact Me</li>
        </a>
      </ul>
    </div>
  );
};

export default Menu;
