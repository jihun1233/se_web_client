import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCustom = styled.td`
  overflow: hidden;
  white-space: nowrap;
  &:overflow::after {
    content: 'a';
  }
`;
const Td = ({ children }) => {
  return <TdCustom>{children}</TdCustom>;
};

Td.propTypes = {
  children: PropTypes.arrayOf([]).isRequired
};

export default Td;
