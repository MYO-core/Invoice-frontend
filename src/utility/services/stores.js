import { callApi } from '../apiUtils';

const addOrg = async ({ body }) => {
  const response = await callApi.post(`/stores`, body);
  return response;
};

const getAllOrg = async ({ start, limit, roleId, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/stores?start=${start || 0}&limit=${limit || 10}${searchQuery}`);
  return response;
};

const getSingleOrg = async ({ id }) => {
  const response = await callApi.get(`/stores/${id}`);
  return response;
};

const updateOrg = async ({ id, body }) => {
  const response = await callApi.patch(`/stores/${id}`, body);
  return response;
};

const deleteOrg = async (questionId) => {
  const response = await callApi.delete(`/stores/${questionId}`);
  return response;
};

export { addOrg, getAllOrg, getSingleOrg, updateOrg, deleteOrg };
