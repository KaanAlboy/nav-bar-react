import { Fragment, useState } from "react";
import Menu from "./components/UI/Menu";
import NavBar from "./components/UI/NavBar";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const hamburgerBtnClickHandler = () => {
    setMenuIsVisible(true);
  };
  const menuCloseBtnClickHandler = () => {
    setMenuIsVisible(false);
  };

  return (
    <Fragment>
      <NavBar onHamburgerBtnClick={hamburgerBtnClickHandler} />
      <Menu
        isVisible={menuIsVisible}
        onCloseBtnClick={menuCloseBtnClickHandler}
      />
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(3,0,51,1) 0%, rgba(108,9,121,1) 35%, rgba(255,109,0,1) 94%)",
          height: "90vh",
          width: "100vw",
        }}
      ></div>
      <div style={{ height: "200vh" }}></div>
    </Fragment>
  );
}

export default App;
