import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HorizonBar from '../../atoms/HorizonBar/HorizonBar';

const Container = styled.div`
  transition-duration: 0.3s;
  width: ${props => (props.isVisible ? '100%' : '0%')};
`;

const TrainsitionHorizonBar = ({ isVisible }) => {
  return (
    <Container isVisible={isVisible}>
      <HorizonBar />
    </Container>
  );
};
TrainsitionHorizonBar.defaultProps = {
  isVisible: true
};
TrainsitionHorizonBar.propTypes = {
  isVisible: PropTypes.bool
};

export default TrainsitionHorizonBar;
