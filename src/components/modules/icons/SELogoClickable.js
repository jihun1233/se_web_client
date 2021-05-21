import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SELogo from '../../atoms/icons/SELogo';

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const SELogoClickable = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <SELogo />
    </Container>
  );
};

SELogoClickable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SELogoClickable;
