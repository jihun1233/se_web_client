import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeartClickable from '../icons/HeartClickable';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 179px;
`;
const UserMenuContainer = ({ onClickHeart }) => {
  return (
    <Container>
      <HeartClickable onClick={onClickHeart} />
    </Container>
  );
};
UserMenuContainer.propTypes = {
  onClickHeart: PropTypes.func.isRequired
};

export default UserMenuContainer;
