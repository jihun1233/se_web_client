import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { logout } from '../../../modules/auth';

const Container = styled.div`
  padding: 3rem;
`;
const UserMenu = ({ onClose }) => {
  const dispatch = useDispatch();

  const logoutDispatch = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Button
        onClick={() => {
          logoutDispatch();
          onClose();
        }}
      >
        로그아웃
      </Button>
    </Container>
  );
};
UserMenu.defaultProps = {
  onClose: () => {}
};
UserMenu.propTypes = {
  onClose: PropTypes.func
};

export default UserMenu;
