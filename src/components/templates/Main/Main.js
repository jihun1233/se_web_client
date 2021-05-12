import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3831px;
  padding: 59px 0 0;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 3831px;
  max-width: 1640px;
`;
const Footer = styled.footer`
  background-color: gray;
  width: 100%;
  min-height: 10rem;
`;
const Main = () => {
  return (
    <Container>
      <MainContainer>
        <Header />
        <p>sss</p>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Main;
