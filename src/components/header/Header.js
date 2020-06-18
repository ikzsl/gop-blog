import React from 'react';
// import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../logo.png';

const Header = () => (
  <header>
    <img src={logo} width="100" alt="logo" />
    {/* <nav>
      <ul className="nav">
        <li>
          <NavLink exact to="/" className="link">
            /
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="link">
            /login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="link">
            /signup
          </NavLink>
        </li>
      </ul>
    </nav> */}
  </header>
);
export default Header;
