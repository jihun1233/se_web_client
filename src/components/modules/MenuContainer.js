import React from 'react';
import styled from 'styled-components';
import MenuModule from './MenuModule';

const Container = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 4rem 0 4rem;
  }
`;

const MenuContainer = () => {
  return (
    <Container>
      <MenuModule />
      <MenuModule />
      <MenuModule />
      <MenuModule />
      <MenuModule />
    </Container>
  );
};

export default MenuContainer;
