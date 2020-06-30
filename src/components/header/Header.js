import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { logoutUser } from '../../actions/actions';

import './header.scss';
// import logo from '../../logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleExit = (evt) => {
    evt.preventDefault();
    localStorage.removeItem('token');
    dispatch(logoutUser());
  };

  const isLogged = !!currentUser.id;

  const navbar = (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/login" className="link">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="link">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  const navbarLogged = (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="/add" size="large">
            Create Article
          </NavLink>
        </li>

        <li className="link">{currentUser.username}</li>
        <li className="link">
          <Button disabled={false} size="large" icon={<LogoutOutlined />} onClick={handleExit}>
            Выйти
          </Button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className="header">
      <NavLink to="/" className="headline">
        Гоп-блог
      </NavLink>

      {/* <img src={logo} width="100" alt="logo" /> */}
      {isLogged ? navbarLogged : navbar}
    </header>
  );
};
export default Header;
