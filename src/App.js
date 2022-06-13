import { Fragment, useEffect, useState } from "react";
import Menu from "./components/UI/Menu";
import HamburgerButton from "./components/UI/HamburgerButton";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [hamburgerBtnIsVisible, setHamburgerBtnIsVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (!menuIsVisible) {
      timer = setTimeout(() => {
        setHamburgerBtnIsVisible(true);
      }, 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [menuIsVisible]);

  const hamburgerBtnClickHandler = () => {
    setMenuIsVisible(true);
    setHamburgerBtnIsVisible(false);
  };
  const menuCloseBtnClickHandler = () => {
    setMenuIsVisible(false);
  };

  return (
    <Fragment>
      {hamburgerBtnIsVisible && (
        <HamburgerButton onHamburgerBtnClick={hamburgerBtnClickHandler} />
      )}
      <Menu
        isVisible={menuIsVisible}
        onCloseBtnClick={menuCloseBtnClickHandler}
      />
      <div style={{ height: "200vh" }}></div>
    </Fragment>
  );
}

export default App;
