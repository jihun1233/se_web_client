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
  border-top: 3px #66747e solid;
  border-collapse: collapse;
  text-align: center;
  vertical-align: center;
  table-layout: fixed;
  & > th,
  td {
    border-bottom: 2px #a6a6a6 solid;
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
