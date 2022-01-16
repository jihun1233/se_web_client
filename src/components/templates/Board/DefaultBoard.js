import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostList } from '../../../modules/post';
import NumberButtonGroup from '../../modules/Pagination/NumberButtonGroup';
import Table from '../../modules/Table/Table';
import Button from '../../atoms/Button/Button';
import TagContainer from '../../modules/TagContainer/TagContainer';
import TextLine from '../../atoms/TextLine/TextLine';
import { dateArrayToString } from '../../../libs/utils';
import Square from '../../atoms/icons/Square';

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
const ContentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem 0 1rem;
`;
const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  > div:first-child {
    margin-right: 0.5rem;
  }
`;

const DefaultBoard = ({ match }) => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postListItem);
  const colgroup = [5, 55, 15, 15, 5, 5];
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
        direction: match.params.direction || 'DESC',
        page: match.params.page || 1,
        size: match.params.size || 30
      })
    );
  }, []);

  const arrangeTableData = () => {
    const contents = postList.data.postListItem.content;

    setTbodies(
      contents.map(content => {
        return [
          <p>{content.postId}</p>,
          <ContentTitleContainer>
            <TagContainer tagData={content.tags} />
            <Link to={`/post/${content.postId}`}>
              <TextLine>{content.title}</TextLine>
            </Link>
          </ContentTitleContainer>,
          <NicknameContainer>
            {content.accountType === 'ANONYMOUS' ? null : <Square />}
            {content.nickname}
          </NicknameContainer>,
          <p>{dateArrayToString(content.createAt)}</p>,
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
      nowPage: postList.data.postListItem.pageable.pageNumber + 1,
      maxPage: postList.data.postListItem.totalPages
    });
  };
  useEffect(() => {
    arrangeTableData();
    arrangePagination();
    window.scrollTo(0, 0);
  }, [postList]);

  const onPaginationClick = index => {
    dispatch(
      getPostList({
        boardId: match.params.boardId,
        direction: match.params.direction || 'DESC',
        page: index,
        size: match.params.size || 30
      })
    );
  };
  return (
    <Container>
      <Title>{`${postList.data.boardNameKor}`}</Title>
      <Table colgroup={colgroup} theads={theads} tbodies={tbodies} />
      <ButtonContainer>
        <Link to={`/writepost/${match.params.boardId}`}>
          <Button>게시글작성</Button>
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
