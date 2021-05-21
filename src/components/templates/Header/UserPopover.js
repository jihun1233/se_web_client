import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserPopover = () => {
  return (
    <Container>
      <Button>a</Button>
      <Button>a</Button>
      <Button>a</Button>
    </Container>
  );
};

UserPopover.propTypes = {};

export default UserPopover;
