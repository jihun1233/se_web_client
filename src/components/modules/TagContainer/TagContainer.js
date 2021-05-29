import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../../atoms/Tag/Tag';

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  > * {
    margin: 0 0.1rem;
  }

  flex-wrap: wrap;
`;
const TagContainer = ({ tagData, justify }) => {
  return (
    <Container justify={justify}>
      {tagData ? tagData.map(tag => <Tag>{tag.tag}</Tag>) : ''}
    </Container>
  );
};
TagContainer.defaultProps = {
  justify: 'center'
};
TagContainer.propTypes = {
  tagData: PropTypes.arrayOf([]).isRequired,
  justify: PropTypes.string
};

export default TagContainer;
