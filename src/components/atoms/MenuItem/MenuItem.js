import React from 'react';
import styled from 'styled-components';
import palette from '../../../libs/palette';

const Wrapper = styled.li`
  padding: 8px 12px;
  @media ${props => props.theme.mobile} {
    padding: 12px;
    width: 100%;
    text-align: center;
    border-bottom: 1px ${palette.gray[5]} solid;
    &: first-child {
      border-top: 1px ${palette.gray[5]} solid;
    }
  }
`;

const MyInfoItem = styled.a`
  text-decoration: none;
  color: black;
`;

// const UnderLine = styled.span`
//   width: 100%;
//   height: 3px;
//   background: ${({ color }) => color || (props => props.theme.mainColorHover)};
// `;

const MenuItem = ({ children, href }) => {
  return (
    <Wrapper>
      <MyInfoItem href={href}>{children}</MyInfoItem>
    </Wrapper>
  );
};

MenuItem.propTypes = {};

MenuItem.defaultProps = {};

export default MenuItem;
