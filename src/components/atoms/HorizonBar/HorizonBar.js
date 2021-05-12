import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${props => props.backgroundColor};
`;

const HorizonBar = ({ backgroundColor }) => {
  return <Container backgroundColor={backgroundColor} />;
};
HorizonBar.defaultProps = {
  backgroundColor: '#00a0de'
};
HorizonBar.propTypes = {
  backgroundColor: PropTypes.string
};

export default HorizonBar;
