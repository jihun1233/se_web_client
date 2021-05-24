import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { createRequestSaga, createRequestSagaById } from '../libs/reducerUtils';
import { loginAPI } from '../libs/api/auth';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';

const SIGNUP = 'auth/SIGNUP';
// const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
// const SIGNUP_FAIL = 'auth/SIGNUP_FAIL';

export const login = createAction(LOGIN, ({ id, pw }) => ({
  id,
  pw
}));
export const logout = createAction(LOGOUT);
export const signup = createAction(SIGNUP);

function* loginSaga(action) {
  try {
    const res = yield call(loginAPI, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: res.data });
    localStorage.setItem('token', res.data.data.token);
  } catch (err) {
    yield put({ type: LOGIN_FAIL, payload: err, error: true });
  }
}

function* logoutSaga() {
  try {
    yield put({ type: LOGOUT_SUCCESS, payload: false });
    localStorage.removeItem('token');
  } catch (err) {
    yield put({ type: LOGOUT_FAIL, payload: err, error: true });
  }
}
/**
 * 
 * export const createRequestSaga = (type, request) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAIL`];
  return function* saga(action) {
    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data
      });
    } catch (err) {
      yield put({
        type: FAILURE,
        payload: err,
        error: true
      });
    }
  };
};
 */
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
const initialState = {
  login: {
    auth: false,
    code: null,
    message: null,
    data: null
  },
  loginError: false,
  auth: false
};

const auth = handleActions(
  {
    [LOGIN]: state => state,
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      login: { ...action.payload, auth: true }
    }),
    [LOGIN_FAIL]: (state, action) => ({ ...state, loginError: action.payload }),
    [LOGOUT]: state => state,
    [LOGOUT_SUCCESS]: state => ({
      ...state,
      login: { code: null, message: null, data: null, auth: false }
    }),
    [LOGOUT_FAIL]: state => state
  },
  initialState
);
export default auth;
