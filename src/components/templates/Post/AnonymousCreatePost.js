import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import TableWithSpan from '../../modules/Table/TableWithSpan';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../../modules/post';
import Editor from '../../modules/CKEditor/Editor';
import TextField from '../../atoms/TextField/TextField';
import Button from '../../atoms/Button/Button';

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
const InputContainer = styled.div`
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
const H4 = styled.h4`
  min-width: 5rem;
`;
const CreatePost = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [anonymous, setAnonymous] = useState({
    anonymousNickname: '',
    anonymousPassword: ''
  });
  const titleOnChange = e => {
    setTitle(e.target.value);
  };
  const contentOnChange = value => {
    setContent(value);
  };
  const anonymouseOnChange = e => {
    setAnonymous({ ...anonymous, [e.target.name]: e.target.value });
    console.log(anonymous);
  };
  const createPostDispatch = () => {
    dispatch(
      createPost({
        anonymous,
        boardId: match.params.boardId,
        postContent: { text: content, title },
        isNotice: 'NORMAL',
        isSecret: 'NORMAL',
        tagList: []
      })
    );

    history.push(`/board/${match.params.boardId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <InputContainer>
        <H2>제목</H2>
        <GrowableContent>
          <TextField value={title} onChange={titleOnChange} autoFocus grow />
        </GrowableContent>
      </InputContainer>
      <InputContainer>
        <H4>익명 이름</H4>
        <TextField
          name="anonymousNickname"
          value={anonymous.anonymousNickname}
          onChange={anonymouseOnChange}
        />
        <H4>익명 비밀번호</H4>
        <TextField
          type="password"
          name="anonymousPassword"
          value={anonymous.anonymousPassword}
          onChange={anonymouseOnChange}
        />
      </InputContainer>

      <ContentText>
        <Editor value={content} onChange={contentOnChange} />
      </ContentText>

      <InputContainer />

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
