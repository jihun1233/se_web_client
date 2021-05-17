import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableModule from '../../modules/Table/TableModule';
import { getPostList } from '../../../modules/post';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10rem;
`;
const Container = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
const DefaultBoard = ({ match }) => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);
  const colgroup = [5, 50, 20, 15, 5, 5];
  const theads = [
    <p>번호</p>,
    <p>제목</p>,
    <p>작성자</p>,
    <p>작성일</p>,
    <p>답글</p>,
    <p>조회수</p>
  ];
  const [tbodies, setTbodies] = useState([]);
  useEffect(() => {
    dispatch(
      getPostList({
        boardId: match.params.id,
        direction: null,
        page: null,
        size: null
      })
    );
  }, []);
  const arrangeTableData = () => {
    setTbodies(
      postList.data.content.map(content => {
        return [
          <p>{content.postId}</p>,
          <Link to={`/post/${content.postId}`}>
            <p>{content.title}</p>
          </Link>,
          <p>{content.nickname}</p>,
          <p>{content.createAt}</p>,
          <p>{content.numReply}</p>,
          <p>{content.views}</p>
        ];
      })
    );
  };
  useEffect(() => {
    arrangeTableData();
    window.scrollTo(0, 0);
  }, [postList]);

  return (
    <Container>
      <Title>{match.params.id}</Title>
      <TableModule colgroup={colgroup} theads={theads} tbodies={tbodies} />
    </Container>
  );
};
DefaultBoard.defaultProps = {};
DefaultBoard.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default DefaultBoard;
