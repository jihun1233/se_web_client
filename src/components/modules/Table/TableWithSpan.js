import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thead from '../../atoms/Table/Thead';
import Tbody from '../../atoms/Table/Tbody';
import Tr from '../../atoms/Table/Tr';
import Td from '../../atoms/Table/Td';
import Th from '../../atoms/Table/Th';

const TableCustom = styled.table`
  width: 100%;
  border-top: 1px solid;
  border-collapse: collapse;
  text-align: left;
  vertical-align: center;
  table-layout: fixed;
  border-top: 3px #66747e solid;
  th,
  td {
    border-bottom: 2px #a6a6a6 solid;
    padding-left: 1rem;
  }
  & > thead > tr {
    border-bottom: 2px #a6a6a6 solid;
  }
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
          {colgroup.map(col => (
            <col width={`${col}%`} />
          ))}
        </colgroup>
      ) : (
        ''
      )}
      <Thead>
        <Tr>
          {theads.map(cell => (
            <Th
              colSpan={cell.colSpan ? cell.colSpan : 1}
              rowSpan={cell.rowSpan ? cell.rowSpan : 1}
            >
              {cell.data}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tbodies.map(row => {
          return (
            <Tr>
              {row.map(cell =>
                cell.isTh ? (
                  <Th
                    colSpan={cell.colSpan ? cell.colSpan : 1}
                    rowSpan={cell.rowSpan ? cell.rowSpan : 1}
                  >
                    {cell.data}
                  </Th>
                ) : (
                  <Td
                    colSpan={cell.colSpan ? cell.colSpan : 1}
                    rowSpan={cell.rowSpan ? cell.rowSpan : 1}
                  >
                    {cell.data}
                  </Td>
                )
              )}
            </Tr>
          );
        })}
      </Tbody>
    </TableCustom>
  );
};
Table.defaultProps = {
  colgroup: [],
  hover: false
};
Table.propTypes = {
  colgroup: PropTypes.arrayOf([]),
  theads: PropTypes.arrayOf([]).isRequired,
  tbodies: PropTypes.arrayOf([]).isRequired,
  hover: PropTypes.bool
};

export default Table;
