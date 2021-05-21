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
  @keyframes fade-in {
    from {
      max-height: 0%;
    }
    to {
      max-height: 100vh;
    }
  }

  @keyframes fade-out {
    from {
      max-height: 100%;
    }
    to {
      max-height: 0%;
    }
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
  z-index: 999;
  width: 10rem;
  height: auto;
  list-style: none;
  background-color: white;
  box-shadow: 3px 3px 5px 1px lightgray, -1px 3px 3px 1px lightgray;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  padding: 1px;
`;
const Li = styled.li`
  background-color: white;
  margin: 1px 0 1px 0;
  height: 5rem;
  width: 100%;
  list-style: none;
  text-align: center;
  & > ul {
    animation: fade-out 0.3s;
    animation-fill-mode: forwards;
    display: none;
  }
  & > ul > li > ul {
    margin-left: 10rem;
    margin-top: -5.3rem;
  }
  & > ul:hover,
  &:hover > ul {
    display: inherit;
    position: absolute;
    animation: fade-in 1s;
    animation-fill-mode: forwards;
  }
`;

const MenuContainer = ({ menuData }) => {
  const history = useHistory();
  // const [isSelected, setIsSelected] = useState(
  //   new Array(menuData.length).fill(false)
  // );
  // const toggle = index => {
  //   const newSelected = new Array(isSelected.length).fill(false);
  //   newSelected[index] = true;
  //   setIsSelected(newSelected);
  // };

  const [menuList, setMenuList] = useState();
  const fillMenus = dataArray => {
    if (dataArray === null || dataArray.length === 0) return null;
    const sortedData = [...dataArray].sort((a, b) => {
      return a.menuOrder - b.menuOrder;
    });
    return sortedData.map(menu => (
      <Li>
        <MenuModule
          text={menu.nameKor}
          onClick={() => {
            if (menu.menuType === 'BOARD') {
              history.push({
                pathname: `/board/${menu.menuId}`
                // name을 state로 값을 넘기면 이 onclick을 통한 이동은 라우팅되지만 주소로 바로입력시 state전달이안된다 다른방안
              });
            } else if (menu.menuType === 'REDIRECT') {
              window.open(menu.url);
            }
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
  }, []);
  return (
    <Nav>
      <RootUl>{menuList}</RootUl>
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
