import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import ReactRouterPropTypes from 'react-router-prop-types';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [isSelected, setIsSelected] = useState(
    new Array(menuData.length).fill(false)
  );
  const toggle = index => {
    const newSelected = new Array(isSelected.length).fill(false);
    newSelected[index] = true;
    setIsSelected(newSelected);
  };

  const [menuList, setMenuList] = useState();
  const fillMenus = dataArray => {
    if (dataArray === null || dataArray.length === 0) return null;

    return dataArray.map((menu, index) => (
      <Li>
        <MenuModule
          text={menu.nameKor}
          onClick={() => {
            console.log(menu);
            history.push(menu.url);
            toggle(index);
            console.log('menumodule.clicked');
          }}
        />
        {menu.child.length > 0 ? <Ul>{fillMenus(menu.child)}</Ul> : ''}
      </Li>
    ));
    // Li로 감싼 메뉴 넣기
    // child.length > 0 이면 Ul 로 감싼 후 그안에 fillMenus();
  };
  const arrangeMenuList = () => {
    const menus = fillMenus(menuData);
    setMenuList(menus);
  };
  useEffect(() => {
    arrangeMenuList();
    console.log(history);
  }, []);
  return (
    <Nav>
      <RootUl>
        {menuList}
        {/* {menuData.map((menu, index) => (
          <Li>
            <MenuModule
              text={menu}
              isSelected={isSelected[index]}
              onClick={() => {
                toggle(index);
                history.push('/test');
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
        ))} */}
      </RootUl>
    </Nav>
  );
};
MenuContainer.defaultProps = {
  menuData: []
};
MenuContainer.propTypes = {
  menuData: PropTypes.arrayOf([])
};

export default MenuContainer;
