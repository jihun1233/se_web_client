import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TableModule from '../../modules/Table/TableModule';
import { getPostList } from '../../../modules/post';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10rem;
`;
const DefaultBoard = ({ match, history, location }) => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);
  useEffect(() => {
    dispatch(
      getPostList({
        boardId: match.params.id,
        direction: null,
        page: null,
        size: null
      })
    );
    console.log(postList);
    console.log(match);
    console.log(history);
    console.log(location);
  }, []);
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
      <Title>{match.params.id}</Title>
      <TableModule colgroup={colgroup} theads={theads} tbodies={tbodies} />
    </div>
  );
};
DefaultBoard.defaultProps = {};
DefaultBoard.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired
};

export default DefaultBoard;
