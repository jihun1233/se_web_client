import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThCustom = styled.th``;
const Th = ({ children }) => {
  return <ThCustom>{children}</ThCustom>;
};

Th.propTypes = { children: PropTypes.arrayOf([]).isRequired };

export default Th;
