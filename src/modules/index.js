import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';
import post, { postSaga } from './post';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({
  menu,
  post,
  auth
});

export function* rootSaga() {
  yield all([menuSaga(), postSaga(), authSaga()]);
}

export default rootReducer;
