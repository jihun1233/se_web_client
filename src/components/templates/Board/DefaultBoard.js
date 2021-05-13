import React from 'react';
// import PropTypes from 'prop-types';
import TableModule from '../../modules/Table/TableModule';

const DefaultBoard = () => {
  const colgroup = [20, 60, 10, 10];
  const theads = [<button type="button">abc</button>, <p>222</p>, 'a', 'b'];
  const tbodies = [
    [
      <p>bbb</p>,
      <p>
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </p>,
      <p>bbb</p>,
      <p>bbb</p>
    ],
    [<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>],
    [<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>],
    [<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>]
  ];
  return (
    <div>
      <TableModule colgroup={colgroup} theads={theads} tbodies={tbodies} />
    </div>
  );
};
DefaultBoard.defaultProps = {};
DefaultBoard.propTypes = {};

export default DefaultBoard;
