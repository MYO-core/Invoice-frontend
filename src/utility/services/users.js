import { callApi } from '../apiUtils';

const addUser = async ({ body }) => {
  const response = await callApi.post(`/users`, body);
  return response;
};

const getAllUser = async ({ start, limit, roleId, search }) => {
  let roleQuery = roleId ? `&roleId=${roleId}` : '';
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/users?start=${start || 0}&limit=${limit || 10}${roleQuery}${searchQuery}`);
  return response;
};

const getSingleUser = async ({ id }) => {
  const response = await callApi.get(`/users/${id}`);
  return response;
};

const updateUser = async ({ id, body }) => {
  const response = await callApi.patch(`/users/${id}`, body);
  return response;
};

const deleteUser = async (questionId) => {
  const response = await callApi.delete(`/users/${questionId}`);
  return response;
};

export { addUser, getAllUser, getSingleUser, updateUser, deleteUser };
