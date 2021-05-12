import React, { useState } from 'react';
import styled from 'styled-components';
import TransitionHorizonBar from '../TransitionHorizonBar/TransitionHorizonBar';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 77px;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const MenuModule = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => {
        console.log('enter');
        setIsHover(true);
      }}
      onMouseLeave={() => {
        console.log('leave');
        setIsHover(false);
      }}
      isHover={isHover}
    >
      <div />
      <MenuButton isHover={isHover} />
      <TransitionHorizonBar isVisible={isHover} />
    </Container>
  );
};

export default MenuModule;
