import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 1px solid;
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
