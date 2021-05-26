import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const AddTagPopover = () => {
  return (
    <Container>
      <Title>태그 추가</Title>
      {/* <SearchBar />
      <SelectList /> */}
      <Button>빵야</Button>
    </Container>
  );
};

AddTagPopover.propTypes = {};

export default AddTagPopover;
