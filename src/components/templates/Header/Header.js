import React from 'react';
import styled from 'styled-components';

import SELogoClickable from '../../modules/icons/SELogoClickable';
import MenuContainer from '../../modules/MenuContainer/MenuContainer';
import UserMenuContainer from '../../modules/UserMenuContainer/UserMenuContainer';

const Middle = styled.div`
  flex-grow: 2;
`;
const Left = styled.div`
  &:hover {
    cursor: pointer;
  }
  flex-grow: 1;
`;
const Right = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 15rem;
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <SELogoClickable
          onClick={() => {
            console.log('logo clicked');
          }}
        />
      </Left>
      <Middle>
        <MenuContainer />
      </Middle>
      <Right>
        <UserMenuContainer
          onClickHeart={() => {
            console.log('heart clicked');
          }}
        />
      </Right>
    </Container>
  );
};

export default Header;
