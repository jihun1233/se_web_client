import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuModule from '../MenuModule/MenuModule';

const Nav = styled.nav`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;

  > li {
    height: 100%;
    display: none;
  }
  &:hover ul > li {
    display: block;
  }
`;
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  > li {
    height: 100%;
    margin: 1rem 2rem 1rem 2rem;
  }
`;
const Li = styled.li`
  width: 100%;
  list-style: none;
  & > ul {
    display: none;
  }
  & > ul:hover,
  &:hover > ul {
    display: inherit;
    position: fixed;
  }
`;

const MenuContainer = ({ menuData }) => {
  const [isSelected, setIsSelected] = useState(
    new Array(menuData.length).fill(false)
  );
  const toggle = index => {
    const newSelected = new Array(isSelected.length).fill(false);
    newSelected[index] = true;
    setIsSelected(newSelected);
  };
  return (
    <Nav>
      <Ul>
        {menuData.map((menu, index) => (
          <Li>
            <MenuModule
              text={menu}
              isSelected={isSelected[index]}
              onClick={() => {
                toggle(index);
              }}
            />
            <ul>
              <li>
                <MenuModule text="test" />
              </li>
              <li>b</li>
            </ul>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
MenuContainer.defaultProps = {
  menuData: ['1번메뉴 슉..슉슉..', '2번메뉴', '3번메뉴', '4번메뉴', '5번메뉴']
};
MenuContainer.propTypes = {
  menuData: PropTypes.arrayOf([])
};

export default MenuContainer;
