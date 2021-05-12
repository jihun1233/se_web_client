import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-direction: column;
`;

const RegisterPage = () => {
  return (
    <>
      <Wrapper>횐가입</Wrapper>
    </>
  );
};
RegisterPage.propTypes = {};

RegisterPage.defaultProps = {};

export default RegisterPage;
