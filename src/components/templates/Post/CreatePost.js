import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import TableWithSpan from '../../modules/Table/TableWithSpan';
import { createPost } from '../../../modules/post';
import Editor from '../../modules/CKEditor/Editor';
import TextField from '../../atoms/TextField/TextField';

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
const ContentText = styled.div``;
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

  const colgroup = [10, 10, 10, 10, 10, 10, 40];
  const theads = [
    {
      data: <h1 style={{ fontSize: `1.5rem`, fontWeight: 'normal' }}>제목</h1>,
      colSpan: 1
    },
    {
      data: (
        <TextField
          value={title}
          onChange={titleOnChange}
          grow
          fontSize="1.5rem"
        />
      ),
      colSpan: 6
    }
  ];
  const [tbodies, setTbodies] = useState([]);
  const arrangePost = () => {
    setTbodies([
      [
        { isTh: true, data: <p>태그</p> },
        {
          data: ''
        },
        { data: '', colSpan: 5 }
      ]
    ]);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    arrangePost();
  }, []);
  return (
    <Container>
      <BoardTitle>{`게시판: ${match.params.boardId}`}</BoardTitle>
      <TableWithSpan colgroup={colgroup} theads={theads} tbodies={tbodies} />
      <ContentText>
        <Editor value={content} onChange={contentOnChange} />
      </ContentText>
      <ButtonContainer>
        <button type="button" onClick={createPostDispatch}>
          완료
        </button>
      </ButtonContainer>
    </Container>
  );
};

CreatePost.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default CreatePost;
