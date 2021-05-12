import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';

import { initialize, loadMenuList } from '../../../modules/menu';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { list, listError } = useSelector(({ menu }) => ({
    list: menu.list,
    listError: menu.listError
  }));

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadMenuList({ token }));
    console.log(list);
    console.log(listError);
  }, [dispatch]);

  return <Header menuList={list} />;
};

HeaderContainer.propTypes = {};

export default HeaderContainer;
