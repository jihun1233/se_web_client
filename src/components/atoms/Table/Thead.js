import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TheadCustom = styled.thead``;
const Thead = ({ children }) => {
  return <TheadCustom>{children}</TheadCustom>;
};

Thead.propTypes = { children: PropTypes.arrayOf([]).isRequired };

export default Thead;
