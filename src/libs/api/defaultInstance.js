import axios from 'axios';

const defaultInstance = axios.create();

defaultInstance.defaults.baseURL = process.env.REACT_APP_API_URL;
defaultInstance.defaults.crossDomain = true;
defaultInstance.defaults.headers.Accept = '*/*';
defaultInstance.defaults.headers.withCredentials = true;
defaultInstance.defaults.headers.post['Content-Type'] = 'application/json';
defaultInstance.defaults.headers['Access-Control-Allow-Origin'] = '*';
defaultInstance.defaults.headers['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,DELETE,PATCH,OPTIONS';
defaultInstance.defaults.headers['Access-Control-Allow-Headers'] =
  'Content-Type, Authorization, Content-Length, X-Requested-With';
// auth token 모든 리퀘스트에 대해 헤더에 추가
defaultInstance.interceptors.request.use(configInput => {
  const config = configInput;
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['X-AUTH-TOKEN'] = token;
  }
  return config;
});

export default defaultInstance;
