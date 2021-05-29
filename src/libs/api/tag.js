import defaultInstance from './defaultInstance';

const searchTagAPI = async ({ text }) => {
  const response = await defaultInstance.get(`/tag/match/${text}`);
  return response;
};

export default searchTagAPI;
