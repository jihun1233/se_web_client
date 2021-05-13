import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h1`
  white-space: nowrap;
  font-size: 1.5rem;
  ${props => (props.isSelected ? '{color: pink;  }' : '')};
`;

const MenuButton = ({ isSelected, text }) => {
  return (
    <div>
      <TitleWrapper isSelected={isSelected}>{text}</TitleWrapper>
    </div>
  );
};
MenuButton.defaultProps = {
  isSelected: false
};
MenuButton.propTypes = {
  isSelected: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default MenuButton;
