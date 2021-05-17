import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  display: inline-block;
  background-color: #f6f6f6;
  color: #767676;
  border-radius: 2px;
  padding: 1px 8px;
  text-decoration: none;

  ${props =>
    props.isSelected ? ' color: #D88700;' : ' &:hover {cursor: pointer}'}
`;
const NumberButton = ({ isSelected, text, onClick }) => {
  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

NumberButton.defaultProps = {
  isSelected: false,
  onClick: null
};

NumberButton.propTypes = {
  isSelected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default NumberButton;
