import client, { tokenHeader } from './client';

const url = `menu`;

export const getMenuList = ({ token }) => {
  return client.get(`${url}`, tokenHeader(token));
};

export const getMenu = id => client.get(`${url}/${id}`);
