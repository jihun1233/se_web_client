import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../libs/api/menu';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../libs/createRequestSaga';

const INITIALIZE = 'menu/INITIALIZE';

const [
  LOAD_MENU_LIST,
  LOAD_MENU_LIST_SUCCESS,
  LOAD_MENU_LIST_FAILURE
] = createRequestActionTypes('menu/LOAD_MENU_LIST');

export const initialize = createAction(INITIALIZE);

export const loadMenuList = createAction(LOAD_MENU_LIST, ({ token }) => ({
  token
}));

const loadMenuListSaga = createRequestSaga(LOAD_MENU_LIST, api.getMenuList);

export function* menuSaga() {
  yield takeLatest(LOAD_MENU_LIST, loadMenuListSaga);
}

const initialState = {
  list: null,
  listError: null
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [LOAD_MENU_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_MENU_LIST_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    })
  },
  initialState
);
