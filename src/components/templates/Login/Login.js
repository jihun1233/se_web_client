import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '../../atoms/TextField/TextField';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import { login } from '../../../modules/auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const Login = ({ onClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ id: '', pw: '' });
  const loginDispatch = () => {
    dispatch(login({ ...inputs, history }));
    onClose();
  };
  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const enterKeyLogin = e => {
    if (e.key === 'Enter') {
      loginDispatch();
    }
  };

  return (
    <Container onKeyDown={enterKeyLogin}>
      <Title color="#00a0de">로 그 인</Title>
      <TextField
        name="id"
        label="Id"
        value={inputs.id}
        onChange={handleChange}
        fontSize="1.5rem"
      />
      <TextField
        name="pw"
        label="비밀번호"
        value={inputs.password}
        onChange={handleChange}
        type="password"
        fontSize="1.5rem"
      />
      <ButtonContainer>
        <Button
          onClick={() => {
            loginDispatch();
          }}
        >
          로그인
        </Button>
      </ButtonContainer>
    </Container>
  );
};
Login.defaultProps = {
  onClose: () => {}
};
Login.propTypes = { onClose: PropTypes.func };

export default Login;
