import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.fontsize};
  color: ${props => props.color};
`;
const Title = ({ children, fontSize, color }) => {
  return (
    <H1 fontsize={fontSize} color={color}>
      {children}
    </H1>
  );
};

Title.defaultProps = {
  fontSize: '',
  color: ''
};
Title.propTypes = {
  children: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string
};

export default Title;
