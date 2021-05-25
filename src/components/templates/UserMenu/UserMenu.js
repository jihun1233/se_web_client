import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/Button/Button';

import { logout } from '../../../modules/auth';

const UserMenu = ({ onClose }) => {
  const dispatch = useDispatch();

  const logoutDispatch = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Button
        onClick={() => {
          logoutDispatch();
          onClose();
        }}
      >
        로그아웃
      </Button>
    </div>
  );
};
UserMenu.defaultProps = {
  onClose: () => {}
};
UserMenu.propTypes = {
  onClose: PropTypes.func
};

export default UserMenu;
