import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import SelectList from '../../modules/TextList/SelectList';
import TextField from '../../atoms/TextField/TextField';
import { searchTag } from '../../../modules/tag';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
  > * {
    margin: 1rem 0;
  }
`;

const AddTag = ({ addTag }) => {
  const dispatch = useDispatch();
  const searchTagDispatch = text => {
    dispatch(searchTag({ text }));
  };
  const tagsFromStore = useSelector(state => state.tag.searchedTags);
  const [searchInput, setSearchInput] = useState('');
  const [searchedTagList, setSearchedTagList] = useState([]);

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  // const deleteTag = () => {}
  // arrangeTagList : tagsFromStore의 태그 정보를 textList로 구성
  const arrangeTagList = tags => {
    setSearchedTagList(
      tags.map(tag => ({
        text: tag.text,
        value: tag.tagId,
        onClick: () => {
          addTag(tag);
        }
      }))
    );
  };
  useEffect(() => {
    if (searchInput.length > 0) {
      searchTagDispatch(searchInput);
    }
  }, [searchInput]);

  useEffect(() => {
    arrangeTagList(tagsFromStore.data);
  }, [tagsFromStore]);

  return (
    <Container>
      <TextField value={searchInput} onChange={handleChange} />
      <SelectList textData={searchedTagList} />
    </Container>
  );
};

AddTag.propTypes = {
  addTag: PropTypes.func.isRequired
};

export default AddTag;
