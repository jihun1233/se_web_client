import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import TableModule from '../../modules/Table/TableModule';

const DefaultBoard = ({ match, history }) => {
  useEffect(() => {
    console.log(match, history);
  });
  // const getBoardDataFromStore = () => {};
  // const renderBoard = () => {};
  // match.param에 메뉴 url
  // history는 가지고있다가 게시글 조회할때 board에 post 붙여서 라우팅
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
DefaultBoard.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired
};

export default DefaultBoard;
