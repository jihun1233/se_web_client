import React from 'react';
import styled from 'styled-components';
import MenuModule from '../MenuModule/MenuModule';

const Container = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  > * {
    margin: 1rem 4rem 1rem 4rem;
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
