import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PersonClickable from '../icons/PersonClickable';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 179px;
`;
const UserMenuContainer = ({ onClickPerson }) => {
  return (
    <Container>
      <PersonClickable onClick={onClickPerson} />
    </Container>
  );
};
UserMenuContainer.propTypes = {
  onClickPerson: PropTypes.func.isRequired
};

export default UserMenuContainer;
