import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../modules/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../modules/HeaderMenu/HeaderMenu';
import HeaderMyInfo from '../../modules/HeaderMyInfo/HeaderMyInfo';
import HeaderMenuToggle from '../../modules/HeaderMenuToggle/HeaderMenuToggle';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  padding: 8px 0;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  @media ${props => props.theme.mobile} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

// const type = ['FOLDER', 'BOARD', 'REDIRECT'];

const Header = ({ menuList }) => {
  return menuList ? (
    <NavBar>
      <HeaderLogo />
      <HeaderMenu data={menuList.data} />
      <HeaderMenuToggle />
      <HeaderMyInfo />
    </NavBar>
  ) : null;
};

export default Header;
