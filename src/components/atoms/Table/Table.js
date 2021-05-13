import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thead from './Thead';
import Tbody from './Tbody';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';

const TableCustom = styled.table`
  width: 100%;
  border-top: 1px solid;
  border-collapse: collapse;
  text-align: center;
  vertical-align: center;
  table-layout: fixed;
  ${props =>
    props.hover
      ? `tbody > tr:hover{
       background-color: #f5f5f5;
       transition-duration: 0.3s;
      }}`
      : ''}
`;
const Table = ({ colgroup, theads, tbodies, hover }) => {
  return (
    <TableCustom hover={hover}>
      {colgroup.length > 0 ? (
        <colgroup>
          {colgroup
            .map(col => <col width={`${col}%`} />)
            .filter((col, index) => index < theads.length)}
        </colgroup>
      ) : (
        ''
      )}
      <Thead>
        <Tr>
          {theads.map(cell => (
            <Th>{cell}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tbodies.map(row => {
          return (
            <Tr>
              {row.map(cell => (
                <Td>{cell}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </TableCustom>
  );
};
Table.defaultProps = {
  colgroup: [],
  hover: true
};
Table.propTypes = {
  colgroup: PropTypes.arrayOf([]),
  theads: PropTypes.arrayOf([]).isRequired,
  tbodies: PropTypes.arrayOf([]).isRequired,
  hover: PropTypes.bool
};

export default Table;
