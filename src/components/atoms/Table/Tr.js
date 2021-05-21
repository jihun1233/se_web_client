import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TrCustom = styled.tr``;
const Tr = ({ children }) => {
  return <TrCustom>{children}</TrCustom>;
};

Tr.propTypes = { children: PropTypes.arrayOf([]).isRequired };

export default Tr;
