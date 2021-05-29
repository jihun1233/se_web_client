import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import { getMenuList } from '../../../modules/menu';
import SELogoClickable from '../../modules/icons/SELogoClickable';
import MenuContainer from '../../modules/MenuContainer/MenuContainer';
import UserMenuContainer from '../../modules/UserMenuContainer/UserMenuContainer';
import UserPopover from './UserPopover';

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    getMenuListFromStore();
  }, []);

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
          onClickPerson={handleClick}
        />
      </Right>
      <Popover
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <UserPopover onClose={handleClose} />
      </Popover>
    </Container>
  );
};

export default Header;
