import { callApi } from '../apiUtils';

const addOrg = async ({ body }) => {
  const response = await callApi.post(`/organisation`, body);
  return response;
};

const getAllOrg = async ({ start, limit, roleId, search }) => {
  let roleQuery = roleId ? `&roleId=${roleId}` : '';
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(
    `/organisation?start=${start || 0}&limit=${limit || 10}${roleQuery}${searchQuery}`,
  );
  return response;
};

const getSingleOrg = async ({ id }) => {
  const response = await callApi.get(`/organisation/${id}`);
  return response;
};

const updateOrg = async ({ id, body }) => {
  const response = await callApi.put(`/organisation/${id}`, body);
  return response;
};

const deleteOrg = async (questionId) => {
  const response = await callApi.delete(`/organisation/${questionId}`);
  return response;
};

export { addOrg, getAllOrg, getSingleOrg, updateOrg, deleteOrg };
