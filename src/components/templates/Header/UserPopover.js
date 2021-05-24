import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Login from '../Login/Login';
import { logout } from '../../../modules/auth';

const Container = styled.div``;
const UserPopover = () => {
  const dispatch = useDispatch();
  const logoutDispatch = () => {
    dispatch(logout());
  };
  const [token] = useState(localStorage.getItem('token'));

  return (
    <Container>
      {token ? <Button onClick={logoutDispatch}>로그아웃</Button> : <Login />}
    </Container>
  );
};

UserPopover.propTypes = {};

export default UserPopover;
