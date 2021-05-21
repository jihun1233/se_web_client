import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThCustom = styled.th``;
const Th = ({ children, colSpan, rowSpan }) => {
  return (
    <ThCustom colSpan={colSpan} rowSpan={rowSpan}>
      {children}
    </ThCustom>
  );
};
Th.defaultProps = {
  colSpan: 1,
  rowSpan: 1
};
Th.propTypes = {
  children: PropTypes.arrayOf([]).isRequired,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number
};

export default Th;
