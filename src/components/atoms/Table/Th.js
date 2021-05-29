import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThCustom = styled.th`
  ${props => (props.align ? `text-align: ${props.align}` : '')};
`;
const Th = ({ children, colSpan, rowSpan, align }) => {
  return (
    <ThCustom colSpan={colSpan} rowSpan={rowSpan} align={align}>
      {children}
    </ThCustom>
  );
};
Th.defaultProps = {
  colSpan: 1,
  rowSpan: 1,
  align: null
};
Th.propTypes = {
  children: PropTypes.arrayOf([]).isRequired,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  align: PropTypes.string
};

export default Th;
