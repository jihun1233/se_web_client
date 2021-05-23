import React from 'react';
import PropTypes from 'prop-types';
import MUTextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const CustomTextField = styled(MUTextField)`
  display: flex;

  flex-grow: 1;
  input {
    font-size: 1.5rem;
  }
`;
const TextField = ({ value, onChange }) => {
  return <CustomTextField value={value} onChange={onChange} />;
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
