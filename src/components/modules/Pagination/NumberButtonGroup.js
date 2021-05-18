import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberButton from '../../atoms/Pagination/NumberButton';

const Container = styled.div`
  display: flex;
  > * {
    margin: 0 0.1rem;
  }
`;
const NumberButtonGroup = ({ size, nowPage, maxPage }) => {
  console.log(size, nowPage, maxPage);
  return (
    <Container>
      <NumberButton text={11} />
      <NumberButton text={2} />
      <NumberButton text={3} />
      <NumberButton text={4} />
      <NumberButton text={5} />
      <NumberButton text={6} />
    </Container>
  );
};

NumberButtonGroup.propTypes = {
  size: PropTypes.number.isRequired,
  nowPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired
};

export default NumberButtonGroup;
