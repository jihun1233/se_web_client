import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeleteButton = styled.button`
  border: none;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
  color: red;
  visibility: hidden;
  width: 0;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  transition: margin 0.2s, width 0.2s;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${DeleteButton} {
      visibility: visible;
      width: 100%;
      margin-left: 1rem;
    }
  }
`;
const TagSpan = styled.span`
  white-space: nowrap;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.mainColor};
  color: ${props => props.theme.colors.mainColor};
  padding: 0.1rem 0.5rem;
  display: flex;
`;

/**
 * 
 *   ${props =>
    props.deletable
      ? `visibility: hidden; width: 0;`
      : 'visibility: visible; width: 100%;'}
 */
const TagDeletable = ({ children, deletable, onDelete }) => {
  return (
    <Container>
      <TagSpan>
        {children}
        {deletable ? <DeleteButton onClick={onDelete}>x</DeleteButton> : ''}
      </TagSpan>
    </Container>
  );
};
TagDeletable.defaultProps = {
  deletable: false,
  onDelete: null
};
TagDeletable.propTypes = {
  children: PropTypes.string.isRequired,
  deletable: PropTypes.bool,
  onDelete: PropTypes.func
};

export default TagDeletable;
