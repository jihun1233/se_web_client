import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TableWithSpan from '../../modules/Table/TableWithSpan';
import { getPostById } from '../../../modules/post';
import TagContainer from '../../modules/TagContainer/TagContainer';

const BoardTitle = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;
const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

const ContentText = styled.div`
  padding: 2rem;
`;
const ReadPost = ({ match, history, location }) => {
  const dispatch = useDispatch();
  const postData = useSelector(state => state.post.postById.data);
  const getPostFromStore = postId => {
    dispatch(getPostById({ postId }));
  };
  console.log(match, history, location);
  const colgroup = [10, 20, 10, 10, 10, 20, 20];
  const theads = [
    {
      data: (
        <h1 style={{ fontSize: `1.5rem`, fontWeight: 'normal' }}>
          {postData.postContent.title}
        </h1>
      ),
      colSpan: 7
    }
  ];
  const [tbodies, setTbodies] = useState([]);
  const dateToString = dateArray => {
    const [year, month, date, hour, minute] = dateArray;
    const dateString = `${year}-${month}-${date} ${hour}:${minute}`;
    return dateString;
  };
  const arrangePost = () => {
    setTbodies([
      [
        { isTh: true, data: <p>태그</p> },
        {
          data: postData.tags ? (
            <TagContainer tagData={postData.tags} justify="flex-start" />
          ) : (
            ''
          ),
          colSpan: 6
        }
      ],
      [
        { isTh: true, data: <p>작성자</p> },
        {
          data: <p>{postData.accountNickname || postData.anonymousNickname}</p>
        },
        { isth: true, data: <p>조회수</p> },
        { data: <p>{postData.views}</p> },
        { isTh: true, data: <p>작성일</p> },
        {
          data: (
            <p>
              {postData.createdAt ? dateToString([...postData.createdAt]) : ''}
            </p>
          )
        },
        { data: '' }
      ]
    ]);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getPostFromStore(match.params.postId);
  }, []);
  useEffect(() => {
    console.log(postData);
    arrangePost();
  }, [postData]);
  return (
    <Container>
      <BoardTitle>{`게시판: ${postData.boardId}`}</BoardTitle>
      <TableWithSpan colgroup={colgroup} theads={theads} tbodies={tbodies} />
      <ContentText>
        <div dangerouslySetInnerHTML={{ __html: postData.postContent.text }} />
      </ContentText>
    </Container>
  );
};

ReadPost.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired
};

export default ReadPost;
