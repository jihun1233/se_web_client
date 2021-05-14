import defaultInstance from './defaultInstance';

const getMenuListAPI = async () => {
  const response = await defaultInstance.get('menu');
  return response;
};

export default getMenuListAPI;
