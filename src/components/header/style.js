import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const NavList = styled.ul`
  list-style: none;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const NavLinkItem = styled.li`
  margin: 10px;
`;

export const UserImage = styled.img`
  margin: 10px;
`;

export const UserName = styled.span`
  margin: 10px;
  font-size: 20px;
  color: black;
`;

export const Logo = styled.div`
  margin: 10px;
  font-size: 20px;
`;

export const LogoImage = styled.img`
  margin-right: 10px;
  height: 50px;
`;

export const TextLabel = styled.span`
  color: black;
`;
