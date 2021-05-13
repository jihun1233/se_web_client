import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TbodyCustom = styled.tbody``;
const Tbody = ({ children }) => {
  return <TbodyCustom>{children}</TbodyCustom>;
};

Tbody.propTypes = {
  children: PropTypes.arrayOf([]).isRequired
};

export default Tbody;
