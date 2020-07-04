import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { logoutUser } from '../../actions/actions';

import userPic from '../../img/userPic.png';
import logo from '../../logo.png';

import {
  HeaderContainer,
  NavList,
  NavLinkItem,
  UserName,
  Logo,
  LogoImage,
  TextLabel,
} from './style';

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
    <NavList>
      <NavLinkItem>
        <Button size="large">
          <NavLink to="/login">Sign In</NavLink>
        </Button>
      </NavLinkItem>
      <NavLinkItem>
        <Button size="large">
          <NavLink to="/signup">Sign Up</NavLink>
        </Button>
      </NavLinkItem>
    </NavList>
  );

  const navbarLogged = (
    <NavList>
      <NavLinkItem>
        <NavLink to="/add" size="large">
          <Button size="large" icon={<PlusCircleOutlined />}>
            Create Article
          </Button>
        </NavLink>
      </NavLinkItem>

      <NavLinkItem>
        <UserName>{currentUser.username}</UserName>
        <img src={currentUser.image || userPic} alt="userPic" />
      </NavLinkItem>
      <NavLinkItem>
        <Button size="large" danger icon={<LogoutOutlined />} onClick={handleExit}>
          Log Out
        </Button>
      </NavLinkItem>
    </NavList>
  );

  return (
    <HeaderContainer className="header">
      <Logo>
        <NavLink to="/" className="headline">
          <LogoImage src={logo} alt="logo" />
          <TextLabel>Gop-Blog</TextLabel>
        </NavLink>
      </Logo>

      {/* <img src={logo} width="100" alt="logo" /> */}
      {isLogged ? navbarLogged : navbar}
    </HeaderContainer>
  );
};

export default Header;
