import { callApi } from '../apiUtils';

const currentUser = async () => {
  const response = await callApi.get('/auth/me');
  return response;
};

const updateUser = async (body) => {
  const response = await callApi.patch('/auth/me', body);
  return response;
};

const loginUser = async (body) => {
  const response = await callApi.post('/auth/login', body);
  return response;
};
const register = async (body) => {
  const response = await callApi.post('/auth/register', body);
  return response;
};

export { currentUser, loginUser, updateUser, register };
