import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled.h1`
  white-space: nowrap;
  font-size: 2.5rem;
  ${props => (props.isHover ? '{color: pink;  }' : '')};
`;

const MenuButton = ({ isHover }) => {
  return (
    <div>
      <TitleWrapper isHover={isHover}>게시판</TitleWrapper>
    </div>
  );
};
MenuButton.defaultProps = {
  isHover: false
};
MenuButton.propTypes = {
  isHover: PropTypes.bool
};

export default MenuButton;
