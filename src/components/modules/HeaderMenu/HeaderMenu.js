import React from 'react';
import styled from 'styled-components';

import MenuItem from '../../atoms/MenuItem/MenuItem';

const MenuWrapper = styled.div`
  @media ${props => props.theme.mobile} {
    display: none;
    flex-direction: column;
    width: 100%;
  }
`;

const MenuBox = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const HeaderMenu = ({ data }) => {
  return (
    <MenuWrapper>
      {data.length === 0 ? (
        <MenuBox>
          <MenuItem href="/login">게시판</MenuItem>
          <MenuItem href="/register">선 / 후배 교류</MenuItem>
          <MenuItem href="/register">졸업자 정보 열람</MenuItem>
          <MenuItem href="/register">330 예약</MenuItem>
          <MenuItem href="/register">PICKCLE</MenuItem>
        </MenuBox>
      ) : (
        console.log(data.length)
      )}
    </MenuWrapper>
  );
};
HeaderMenu.propTypes = {};

HeaderMenu.defaultProps = {};

export default HeaderMenu;
