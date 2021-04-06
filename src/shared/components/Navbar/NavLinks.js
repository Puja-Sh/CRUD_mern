import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./css/NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          TimeLine
        </NavLink>
      </li>
      {auth.isLoggedIn && (                                 //only show when logged in
        <li>
          <NavLink to="/u1/places"> My Feed </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (                                 //only show when logged in 
        <li>
          <NavLink to="/places/new"> Add Post </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (                                //show when not logged in
        <li>
          <NavLink to="/auth"> Register </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (                                //show when not logged in
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
