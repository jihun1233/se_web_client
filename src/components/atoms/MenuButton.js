import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  white-space: nowrap;
  font-size: 2.5rem;
  &:hover {
    color: pink;
  }
`;

const MenuButton = () => {
  return (
    <div>
      <TitleWrapper>게시판</TitleWrapper>
    </div>
  );
};

export default MenuButton;
