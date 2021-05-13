import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Table from '../../atoms/Table/Table';

const TableModule = ({ colgroup, theads, tbodies }) => {
  return <Table colgroup={colgroup} theads={theads} tbodies={tbodies} />;
};

TableModule.defaultProps = {
  colgroup: []
};
TableModule.propTypes = {
  colgroup: PropTypes.arrayOf([]),
  theads: PropTypes.arrayOf([]).isRequired,
  tbodies: PropTypes.arrayOf([]).isRequired
};

export default TableModule;
