import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  margin-left: 0;
  @media ${props => props.theme.laptop} {
    margin-left: 40px;
  }
  @media ${props => props.theme.desktop} {
    margin-left: 80px;
  }
`;

const Icon = styled.i``;

const Home = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 6px 20px;
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  font-weight: bold;
`;

const HeaderMenuToggle = () => {
  return (
    <LogoWrapper>
      <Icon />
      <Home href="/">SE Board</Home>
    </LogoWrapper>
  );
};
HeaderMenuToggle.propTypes = {};

HeaderMenuToggle.defaultProps = {};

export default HeaderMenuToggle;
