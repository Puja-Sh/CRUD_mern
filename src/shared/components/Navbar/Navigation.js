import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/Navigation.css";
import Backdrop from "../UIElement/Backdrop";
import Header from "./Header";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";

const Navigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
      {drawerIsOpen && (
        <SideBar show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideBar>
      ) }

      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/"> Social Media </Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;
