import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserMenu from '../UserMenu/UserMenu';
import Login from '../Login/Login';

const Container = styled.div``;
const UserPopover = ({ onClose }) => {
  const [token] = useState(localStorage.getItem('token'));
  const onEscapeClose = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  return (
    <Container onKeyDown={onEscapeClose}>
      {token ? <UserMenu onClose={onClose} /> : <Login onClose={onClose} />}
    </Container>
  );
};
UserPopover.defaultProps = {
  onClose: () => {}
};
UserPopover.propTypes = {
  onClose: PropTypes.func
};

export default UserPopover;
