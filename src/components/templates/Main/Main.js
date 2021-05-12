import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 3831px;
  padding: 59px 0 0;
  border: 1px solid;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 3831px;
  max-width: 1640px;
  border: 1px solid yellow;
`;
const Main = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
      </InnerContainer>
    </Container>
  );
};

export default Main;
