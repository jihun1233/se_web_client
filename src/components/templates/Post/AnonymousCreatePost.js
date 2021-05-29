import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import TableWithSpan from '../../modules/Table/TableWithSpan';
import { createPost } from '../../../modules/post';
import Editor from '../../modules/CKEditor/Editor';
import TextField from '../../atoms/TextField/TextField';
import Button from '../../atoms/Button/Button';

const BoardTitle = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;
const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const GrowableContent = styled.div``;
const ContentText = styled.div``;
const ContentTitle = styled.div`
  display: flex;
  margin: 0.5rem;
  & > * {
    margin: 0.5rem;
  }
  align-items: center;
  ${GrowableContent} {
    flex-grow: 1;
    self-justify: flex-start;
  }
`;
const H2 = styled.h2``;
const CreatePost = ({ match }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const titleOnChange = e => {
    setTitle(e.target.value);
  };
  const contentOnChange = value => {
    setContent(value);
  };
  const createPostDispatch = () => {
    dispatch(
      createPost({
        boardId: match.params.boardId,
        postContent: { text: content, title },
        isNotice: 'NORMAL',
        isSecret: 'NORMAL',
        tagList: []
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <BoardTitle>{`게시판: ${match.params.boardId}`}</BoardTitle>
      <ContentTitle>
        <H2>제목</H2>
        <GrowableContent>
          <TextField value={title} onChange={titleOnChange} autoFocus grow />
        </GrowableContent>
      </ContentTitle>

      <ContentText>
        <Editor value={content} onChange={contentOnChange} />
      </ContentText>
      <ButtonContainer>
        <Button onClick={createPostDispatch}>완료</Button>
      </ButtonContainer>
    </Container>
  );
};

CreatePost.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default CreatePost;
