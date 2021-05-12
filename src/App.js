import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/templates/Header/HeaderContainer';
import LoginPage from './components/templates/LoginPage.js/LoginPage';
import RegisterPage from './components/templates/RegisterPage.js/RegisterPage';

const App = () => {
  return (
    <>
      <Route component={HeaderContainer} path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};

export default App;
