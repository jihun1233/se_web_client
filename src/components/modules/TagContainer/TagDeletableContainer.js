import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TagDeletable from '../../atoms/Tag/TagDeletable';

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  > * {
    margin: 0 0.1rem;
  }

  flex-wrap: wrap;
`;
const TagDeletableContainer = ({ tagData, justify, onDelete }) => {
  return (
    <Container justify={justify}>
      {tagData
        ? tagData.map(tag => (
            <TagDeletable
              deletable
              onDelete={() => {
                onDelete(tag.tagId);
              }}
            >
              {tag.tag}
            </TagDeletable>
          ))
        : ''}
    </Container>
  );
};
TagDeletableContainer.defaultProps = {
  justify: 'center',
  onDelete: null
};
TagDeletableContainer.propTypes = {
  tagData: PropTypes.arrayOf([]).isRequired,
  justify: PropTypes.string,
  onDelete: PropTypes.func
};

export default TagDeletableContainer;
