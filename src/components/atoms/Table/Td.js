import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TdCustom = styled.td`
  overflow: hidden;
  white-space: nowrap;
  ${props => (props.align ? `text-align: ${props.align}` : '')};
  &:overflow::after {
    content: 'a';
  }
`;
const Td = ({ children, colSpan, rowSpan, align }) => {
  return (
    <TdCustom colSpan={colSpan} rowSpan={rowSpan} align={align}>
      {children}
    </TdCustom>
  );
};
Td.defaultProps = {
  colSpan: 1,
  rowSpan: 1,
  align: null
};
Td.propTypes = {
  children: PropTypes.arrayOf([]).isRequired,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  align: PropTypes.string
};

export default Td;
