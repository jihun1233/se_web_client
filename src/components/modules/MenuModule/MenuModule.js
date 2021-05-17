import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TransitionHorizonBar from '../TransitionHorizonBar/TransitionHorizonBar';
import MenuButton from '../../atoms/MenuButton/MenuButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const MenuModule = ({ isSelected, onClick, text }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      isHover={isHover}
      onClick={onClick}
    >
      <div />
      <MenuButton text={text} isSelected={isSelected} />
      <TransitionHorizonBar isVisible={isSelected} />
    </Container>
  );
};
MenuModule.defaultProps = {
  isSelected: false,
  onClick: () => {}
};
MenuModule.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export default MenuModule;
