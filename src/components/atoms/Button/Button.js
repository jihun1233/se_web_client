import React from 'react';
import PropTypes from 'prop-types';
import MUButton from '@material-ui/core/Button';
import styled from 'styled-components';

const CustomButton = styled(MUButton)`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

const Button = ({ variant, children, backgroundColor, color, onClick }) => {
  return (
    <div>
      <CustomButton
        variant={variant}
        backgroundColor={backgroundColor}
        onClick={onClick}
        color={color}
        tabIndex={-1}
      >
        {children}
      </CustomButton>
    </div>
  );
};
Button.defaultProps = {
  variant: 'contained',
  backgroundColor: 'white',
  color: 'black',
  onClick: null
};
Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
