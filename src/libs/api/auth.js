import defaultInstance from './defaultInstance';

export const loginAPI = async ({ id, pw }) => {
  const response = await defaultInstance.post('/signin', { id, pw });
  return response;
};

export const signupAPI = async () => {};
