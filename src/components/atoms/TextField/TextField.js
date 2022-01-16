import React from 'react';
import PropTypes from 'prop-types';
import MUTextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const CustomTextField = styled(MUTextField)`
  ${props => (props.grow ? 'width : 100%;' : '')}
  input {
    font-size: ${props => props.fontSize};
  }
`;
const TextField = ({
  type,
  name,
  value,
  onChange,
  grow,
  fontSize,
  label,
  autoFocus
}) => {
  return (
    <CustomTextField
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      grow={grow}
      fontSize={fontSize}
      label={label}
      autoFocus={autoFocus}
    />
  );
};

TextField.defaultProps = {
  type: 'text',
  name: '',
  grow: false,
  fontSize: '1rem',
  label: '',
  autoFocus: false
};
TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  grow: PropTypes.bool,
  fontSize: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool
};

export default TextField;
