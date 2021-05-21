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
