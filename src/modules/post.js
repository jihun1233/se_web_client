import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { createRequestSaga, createRequestSagaById } from '../libs/reducerUtils';
import {
  getPostListAPI,
  getPostByIdAPI,
  createPostAPI
} from '../libs/api/post';

// import getMenuListAPI from '../libs/api/menu';
// 게시판의 게시글 리스트 조회 / 성공 / 실패
const GET_POST_LIST = 'post/GET_POST_LIST';
const GET_POST_LIST_SUCCESS = 'post/GET_POST_LIST_SUCCESS';
const GET_POST_LIST_FAIL = 'post/GET_POST_LIST_FAIL';

// 게시글 id로 조회
const GET_POST_BY_ID = 'post/GET_POST_BY_ID';
const GET_POST_BY_ID_SUCCESS = 'post/GET_POST_BY_ID_SUCCESS';
const GET_POST_BY_ID_FAIL = 'post/GET_POST_BY_ID_FAIL';

// 게시글 등록
const CREATE_POST = 'post/CREATE_POST';
const CREATE_POST_SUCCESS = 'post/CREATE_POST_SUCCESS';
const CREATE_POST_FAIL = 'post/CREATE_POST_FAIL';

export const getPostList = createAction(
  GET_POST_LIST,
  ({ boardId, direction, page, size }) => ({ boardId, direction, page, size })
);
export const getPostById = createAction(GET_POST_BY_ID, ({ postId }) => ({
  postId
}));

export const createPost = createAction(
  CREATE_POST,
  ({ anonymous, boardId, isNotice, isSecret, postContent, tagList }) => ({
    anonymous,
    boardId,
    isNotice,
    isSecret,
    postContent,
    tagList
  })
);
/**
 * anonymous: {anonymousNickname: '', anonymousPassword: ''}
 * postContent: {
 *  text: '',
 *  title: ''
 * }
 * tagList: [
 *  { tagId : 1}
 * ]
 */

const getPostListSaga = createRequestSaga(GET_POST_LIST, getPostListAPI);
const getPostByIdSaga = createRequestSagaById(GET_POST_BY_ID, getPostByIdAPI);
const createPostSaga = createRequestSaga(CREATE_POST, createPostAPI);

export function* postSaga() {
  yield takeLatest(GET_POST_LIST, getPostListSaga);
  yield takeLatest(GET_POST_BY_ID, getPostByIdSaga);
  yield takeLatest(CREATE_POST, createPostSaga);
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
  postListError: false,
  postById: {
    data: {
      postContent: {
        title: null,
        text: null
      },
      tags: []
    }
  },
  postByIdError: false,
  createPost: null,
  createPostError: false
};
const post = handleActions(
  {
    [GET_POST_LIST]: state => state,
    [GET_POST_LIST_SUCCESS]: (state, action) => ({
      ...state,
      postList: action.payload
    }),
    [GET_POST_LIST_FAIL]: (state, action) => ({
      ...state,
      postListError: action.payload
    }),
    [GET_POST_BY_ID]: state => state,
    [GET_POST_BY_ID_SUCCESS]: (state, action) => ({
      ...state,
      postById: action.payload
    }),
    [GET_POST_BY_ID_FAIL]: (state, action) => ({
      ...state,
      postByIdError: action.payload
    }),
    [CREATE_POST]: state => state,
    [CREATE_POST_SUCCESS]: (state, action) => ({
      ...state,
      createPost: action.payload
    }),
    [CREATE_POST_FAIL]: (state, action) => ({
      ...state,
      createPostError: action.payload
    })
  },
  initialState
);
export default post;
