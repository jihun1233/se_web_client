import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';
// import TableWithSpan from '../../modules/Table/TableWithSpan';
import { useHistory } from 'react-router-dom';
import { createPost } from '../../../modules/post';
import Editor from '../../modules/CKEditor/Editor';
import TextField from '../../atoms/TextField/TextField';
import Button from '../../atoms/Button/Button';
import AddTag from '../Tag/AddTag';
import TagDeletableContainer from '../../modules/TagContainer/TagDeletableContainer';

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
const CreatePost = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [tagList, setTagList] = useState([]);
  const deleteTag = tagId => {
    const tempTagList = [...tagList];
    const currentIndex = tempTagList.findIndex(
      currentTag => currentTag.tagId === tagId
    );
    if (currentIndex === -1) return;
    tempTagList.splice(currentIndex, 1);
    setTagList(tempTagList);
  };
  const addTag = ({ tagId, text }) => {
    const currentIndex = tagList.findIndex(
      currentTag => currentTag.tagId === tagId
    );
    if (currentIndex !== -1) return;
    setTagList([
      ...tagList,
      {
        tagId,
        tag: text
      }
    ]);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
        tagList: tagList.map(tag => ({
          tagId: tag.tagId
        }))
      })
    );

    history.push(`/board/${match.params.boardId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <BoardTitle>{`게시판: ${match.params.boardId}`}</BoardTitle>
      <InputContainer>
        <H2>제목</H2>
        <GrowableContent>
          <TextField value={title} onChange={titleOnChange} autoFocus grow />
        </GrowableContent>
      </InputContainer>
      <InputContainer>
        <H2>태그</H2>
        <GrowableContent>
          <TagDeletableContainer
            key={tagList}
            tagData={tagList}
            onDelete={deleteTag}
          />
        </GrowableContent>
        <Button onClick={handleClick}>태그추가</Button>
      </InputContainer>
      <ContentText>
        <Editor value={content} onChange={contentOnChange} />
      </ContentText>
      <ButtonContainer>
        <Button onClick={createPostDispatch}>완료</Button>
      </ButtonContainer>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <AddTag key={tagList} addTag={addTag} />
      </Popover>
    </Container>
  );
};

CreatePost.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default CreatePost;
