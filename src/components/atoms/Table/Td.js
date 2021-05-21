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
const Td = ({ children, colSpan, rowSpan }) => {
  return (
    <TdCustom colSpan={colSpan} rowSpan={rowSpan}>
      {children}
    </TdCustom>
  );
};
Td.defaultProps = {
  colSpan: 1,
  rowSpan: 1
};
Td.propTypes = {
  children: PropTypes.arrayOf([]).isRequired,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number
};

export default Td;
