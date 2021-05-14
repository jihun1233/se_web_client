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
const RootUl = styled.ul`
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
const Ul = styled.ul`
  width: 10rem;

  list-style: none;
  background-color: gray;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
`;
const Li = styled.li`
  background-color: white;
  margin: 0.3rem 0 0.3rem 0;
  height: 5rem;
  width: 100%;
  list-style: none;
  text-align: center;
  & > ul {
    display: none;
  }
  & > ul > li > ul {
    margin-left: 10rem;
    margin-top: -5.3rem;
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
      <RootUl>
        {menuData.map((menu, index) => (
          <Li>
            <MenuModule
              text={menu}
              isSelected={isSelected[index]}
              onClick={() => {
                toggle(index);
              }}
            />
            <Ul>
              <Li>
                <MenuModule text="first" />
              </Li>
              <Li>
                <MenuModule text="first" />
                <Ul>
                  <Li>
                    <MenuModule text="second" />
                  </Li>
                  <Li>
                    <MenuModule text="second" />
                  </Li>
                  <Li>
                    <MenuModule text="second" />
                    <Ul>
                      <Li>
                        <MenuModule text="third" />
                      </Li>
                      <Li>
                        <MenuModule text="third" />
                      </Li>
                      <Li>
                        <MenuModule text="third" />
                      </Li>
                    </Ul>
                  </Li>
                </Ul>
              </Li>
            </Ul>
          </Li>
        ))}
      </RootUl>
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
