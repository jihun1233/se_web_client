import { call, put } from 'redux-saga/effects';

export const createRequestSaga = (type, request) => {
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

export const createRequestSagaById = (type, request) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAIL`];
  return function* saga(action) {
    const id = action.meta;
    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data,
        meta: id
      });
    } catch (err) {
      yield put({
        type: FAILURE,
        payload: err,
        error: true,
        meta: id
      });
    }
  };
};
