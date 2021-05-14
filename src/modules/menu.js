import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { createRequestSaga } from '../libs/reducerUtils';
import getMenuListAPI from '../libs/api/menu';
// 메뉴 리스트 조회 / 성공 / 실패
const GET_MENU_LIST = 'menu/GET_MENU_LIST';
const GET_MENU_LIST_SUCCESS = 'menu/GET_MENU_LIST_SUCCESS';
const GET_MENU_LIST_ERROR = 'menu/GET_MENU_LIST_ERROR';

export const getMenuList = createAction(GET_MENU_LIST);

const getMenuListSaga = createRequestSaga(GET_MENU_LIST, getMenuListAPI);

export function* menuSaga() {
  yield takeLatest(GET_MENU_LIST, getMenuListSaga);
}
const initialState = {
  menuList: {
    data: []
  },
  menuListError: false
};
const menu = handleActions(
  {
    [GET_MENU_LIST]: state => ({ ...state }),
    [GET_MENU_LIST_SUCCESS]: (state, action) => ({
      ...state,
      menuList: action.payload
    }),
    [GET_MENU_LIST_ERROR]: (state, action) => ({
      ...state,
      menuListError: action.payload
    })
  },
  initialState
);
export default menu;
