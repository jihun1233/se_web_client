import React from 'react';
import styled from 'styled-components';
import HorizonBar from '../atoms/HorizonBar';
import MenuButton from '../atoms/MenuButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 77px;
  height: 100%;
`;

const MenuModule = () => {
  return (
    <Container
      onMouseEnter={() => {
        console.log('enter');
      }}
      onMouseLeave={() => {
        console.log('leave');
      }}
    >
      <div />
      <MenuButton />
      <HorizonBar />
    </Container>
  );
};

export default MenuModule;
