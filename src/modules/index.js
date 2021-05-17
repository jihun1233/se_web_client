import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  menu,
  post
});

export function* rootSaga() {
  yield all([menuSaga(), postSaga()]);
}

export default rootReducer;
