import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrappingP = styled.p`
  word-break: break-all;
  white-space: normal;
  padding: 0;
  margin: 0.5rem;
  border-radius: 5px;
  ${props =>
    props.isSelected ? `background-color: ${props.theme.colors.hover};` : ''}
  ${props =>
    props.hover
      ? `&:hover{
    cursor: pointer;
    background-color: ${props.theme.colors.hover}
  }`
      : ''}
`;

const TextLine = ({ children, isSelected, onClick, hover }) => {
  return (
    <WrappingP isSelected={isSelected} onClick={onClick} hover={hover}>
      {children}
    </WrappingP>
  );
};

TextLine.defaultProps = {
  isSelected: false,
  onClick: null,
  hover: false
};

TextLine.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  hover: PropTypes.bool
};

export default TextLine;
