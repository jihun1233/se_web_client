import defaultInstance from './defaultInstance';

const getPostListAPI = async ({ boardId, direction, page, size }) => {
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

export default getPostListAPI;
