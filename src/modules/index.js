import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';
import post, { postSaga } from './post';
import auth, { authSaga } from './auth';
import tag, { tagSaga } from './tag';

const rootReducer = combineReducers({
  menu,
  post,
  auth,
  tag
});

export function* rootSaga() {
  yield all([menuSaga(), postSaga(), authSaga(), tagSaga()]);
}

export default rootReducer;
