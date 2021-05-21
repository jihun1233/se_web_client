import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.hover};
  color: #767676;
  border-radius: 2px;
  padding: 1px 8px;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
  ${({ isSelected, theme }) =>
    isSelected
      ? ` color: white;
    background-color: ${theme.colors.darkgray};`
      : ''}
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
