import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagButton = styled.span`
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border: 1px solid;
  padding: 0.1rem 0.5rem;
  border-color: ${props => props.theme.colors.mainColor};
  color: ${props => props.theme.colors.mainColor};
`;
const Tag = ({ children }) => {
  return (
    <div>
      <TagButton>{children}</TagButton>
    </div>
  );
};

Tag.propTypes = { children: PropTypes.string.isRequired };

export default Tag;
