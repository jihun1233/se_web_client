

import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../src/style/theme';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from '../src/modules/index';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { StylesProvider } from '@material-ui/core';
import StoryRouter from 'storybook-react-router';


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger, sagaMiddleware))
  // applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

/**
 * msw 사용
 */
 if(typeof global.process === 'undefined' ){
  const {worker} = require('../src/mocks/browser');
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  StoryRouter(),
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Story />
        </StylesProvider>
      </ThemeProvider>
  </Provider>
  )
]