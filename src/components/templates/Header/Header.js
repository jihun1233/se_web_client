import React from 'react';
import styled from 'styled-components';
import SELogo from '../../atoms/icons/SELogo';
import MenuContainer from '../../modules/MenuContainer/MenuContainer';
import UserMenuContainer from '../../modules/UserMenuContainer/UserMenuContainer';

const Container = styled.head`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  border: 1px solid;
`;

const Header = () => {
  return (
    <Container>
      <SELogo />
      <MenuContainer />
      <UserMenuContainer />
    </Container>
  );
};

export default Header;
