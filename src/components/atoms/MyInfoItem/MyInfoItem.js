import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  padding: 8px 12px;
  @media ${props => props.theme.mobile} {
    padding: 12px;
    width: 100%;
    text-align: center;
  }
`;

const Item = styled.a`
  text-decoration: none;
  color: black;
`;

const MyInfoItem = ({ children, href }) => {
  return (
    <Wrapper>
      <Item href={href}>{children}</Item>
    </Wrapper>
  );
};

MyInfoItem.propTypes = {};

MyInfoItem.defaultProps = {};

export default MyInfoItem;
