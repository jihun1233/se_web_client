import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostList } from '../../../modules/post';
import NumberButtonGroup from '../../modules/Pagination/NumberButtonGroup';
import Table from '../../modules/Table/Table';

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
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;
const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
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
  const [pageData, setPageData] = useState({
    nowPage: 0,
    maxPage: 100
  });

  useEffect(() => {
    dispatch(
      getPostList({
        boardId: match.params.boardId,
        direction: match.params.direction || 'ASC',
        page: match.params.page || 1,
        size: match.params.size || 30
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
  const arrangePagination = () => {
    // const nowPage = postList.data.pageable.pageNumber;
    // const maxPage = postList.data.totalPages;

    setPageData({
      nowPage: postList.data.pageable.pageNumber,
      maxPage: postList.data.totalPages
    });
  };
  useEffect(() => {
    arrangeTableData();
    arrangePagination();
    window.scrollTo(0, 0);
    console.log(postList);
  }, [postList]);

  const onPaginationClick = index => {
    dispatch(
      getPostList({
        boardId: match.params.boardId,
        direction: null,
        page: index,
        size: null
      })
    );
  };
  return (
    <Container>
      <Title>{`${match.params.boardId}, Page: ${pageData.nowPage}`}</Title>
      <Table colgroup={colgroup} theads={theads} tbodies={tbodies} />
      <ButtonContainer>
        <Link to={`/writepost/${match.params.boardId}`}>
          <button type="button">게시글작성</button>
        </Link>
      </ButtonContainer>
      <PaginationContainer>
        <NumberButtonGroup
          key={pageData}
          maxPage={pageData.maxPage}
          nowPage={pageData.nowPage}
          onClick={onPaginationClick}
        />
      </PaginationContainer>
    </Container>
  );
};
DefaultBoard.defaultProps = {};
DefaultBoard.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default DefaultBoard;
