import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { createRequestSaga } from '../libs/reducerUtils';
import getPostListAPI from '../libs/api/post';

// import getMenuListAPI from '../libs/api/menu';
// 게시판의 게시글 리스트 조회 / 성공 / 실패
const GET_POST_LIST = 'board/GET_POST_LIST';
const GET_POST_LIST_SUCCESS = 'board/GET_POST_LIST_SUCCESS';
const GET_POST_LIST_ERROR = 'board/GET_POST_LIST_ERROR';

export const getPostList = createAction(
  GET_POST_LIST,
  ({ boardId, direction, page, size }) => ({ boardId, direction, page, size })
);

const getPostListSaga = createRequestSaga(GET_POST_LIST, getPostListAPI);

export function* postSaga() {
  yield takeLatest(GET_POST_LIST, getPostListSaga);
}
const initialState = {
  postList: {
    data: {
      content: [],
      pageable: {
        pageNumber: 1,
        pageSize: 50
      },
      totalPages: 100
    }
  },
  postListError: false
};
const post = handleActions(
  {
    [GET_POST_LIST]: state => ({ ...state }),
    [GET_POST_LIST_SUCCESS]: (state, action) => ({
      ...state,
      postList: action.payload
    }),
    [GET_POST_LIST_ERROR]: (state, action) => ({
      ...state,
      postListError: action.payload
    })
  },
  initialState
);
export default post;
