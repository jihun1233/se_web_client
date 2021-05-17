import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeartClickable from '../icons/HeartClickable';
import PersonClickable from '../icons/PersonClickable';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 179px;
`;
const UserMenuContainer = ({ onClickHeart, onClickPerson }) => {
  return (
    <Container>
      <PersonClickable onClick={onClickPerson} />
      <HeartClickable onClick={onClickHeart} />
    </Container>
  );
};
UserMenuContainer.propTypes = {
  onClickHeart: PropTypes.func.isRequired,
  onClickPerson: PropTypes.func.isRequired
};

export default UserMenuContainer;
