import React from 'react';
import styled from 'styled-components';
import Heart from '../../atoms/icons/Heart';

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const UserMenuContainer = () => {
  return (
    <Container>
      <Heart />
    </Container>
  );
};

export default UserMenuContainer;
