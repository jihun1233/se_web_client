import React from 'react';
import styled from 'styled-components';
import Body from '../Body/Body';
import Header from '../Header/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 59px 0 0;
  flex-grow: 1;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 10vh;
  margin-bottom: 5rem;
`;
const BodyContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  max-width: 960px;
`;
const Footer = styled.footer`
  background-color: gray;
  width: 100%;
  height: 100%;
  min-height: 20vh;
`;
const Main = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BodyContainer>
        <Body />
      </BodyContainer>
      <Footer />
    </Container>
  );
};

export default Main;
