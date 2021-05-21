import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from '../../atoms/icons/Person';

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const PersonClickable = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Person />
    </Container>
  );
};

PersonClickable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PersonClickable;
