import defaultInstance from './defaultInstance';

export const getPostListAPI = async ({ boardId, direction, page, size }) => {
  const response = await defaultInstance.get('/post', {
    params: {
      boardId,
      direction,
      page,
      size
    }
  });
  return response;
};

export const getPostByIdAPI = async ({ postId }) => {
  const response = await defaultInstance.get(`/post/${postId}`);
  return response;
};

export const createPostAPI = async ({
  anonymous,
  boardId,
  isNotice,
  isSecret,
  postContent,
  tagList
}) => {
  const response = await defaultInstance.post(`/post`, {
    anonymous,
    boardId,
    isNotice,
    isSecret,
    postContent,
    tagList
  });
  return response;
};
