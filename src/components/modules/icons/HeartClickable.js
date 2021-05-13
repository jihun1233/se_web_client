import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heart from '../../atoms/icons/Heart';

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const HeartClickable = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Heart />
    </Container>
  );
};

HeartClickable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default HeartClickable;
