import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/NavLinks.css';

const NavLinks = () => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact> TimeLine </NavLink>
        </li>
        <li>
            <NavLink to="/u1/places"> My Feed </NavLink>
        </li>
        <li>
            <NavLink to="/places/new"> Add Post </NavLink>
        </li>
        <li>
            <NavLink to="/auth"> Register </NavLink>
        </li>
       
    </ul>
}

export default NavLinks;