import React from 'react';
import styled from 'styled-components';
import './App.css';
import Main from './components/templates/Main';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const App = () => {
  return (
    <Container className="App">
      <Main />
    </Container>
  );
};

export default App;
