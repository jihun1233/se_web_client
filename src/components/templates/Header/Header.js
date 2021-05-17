import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getMenuList } from '../../../modules/menu';
import SELogoClickable from '../../modules/icons/SELogoClickable';
import MenuContainer from '../../modules/MenuContainer/MenuContainer';
import UserMenuContainer from '../../modules/UserMenuContainer/UserMenuContainer';

const Middle = styled.div`
  flex-grow: 2;
  overflow: hidden;
`;
const Left = styled.div`
  &:hover {
    cursor: pointer;
  }
  flex-grow: 0;
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
  const menuList = useSelector(state => state.menu.menuList);
  const dispatch = useDispatch();
  const getMenuListFromStore = () => dispatch(getMenuList());
  useEffect(() => {
    getMenuListFromStore();
  }, []);
  useEffect(() => {
    console.log(menuList);
  }, [menuList]);
  return (
    <Container>
      <Left>
        <SELogoClickable
          onClick={() => {
            console.log('logo clicked');
            window.location = '/';
          }}
        />
      </Left>
      <Middle>
        <MenuContainer key={menuList.data} menuData={menuList.data} />
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
