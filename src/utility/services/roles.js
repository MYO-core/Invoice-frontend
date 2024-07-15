import { callApi } from '../apiUtils';

const addRoles = async ({ body }) => {
  const response = await callApi.post(`/roles`, body);
  return response;
};

const getAllRoles = async ({ start, limit, RoleNumber, status }) => {
  const response = await callApi.get(`/roles?start=${start}&limit=${limit}`);
  return response;
};

const getSingleRole = async ({ id }) => {
  const response = await callApi.get(`/roles/${id}`);
  return response;
};

const updateRole = async ({ id, body }) => {
  const response = await callApi.patch(`/roles/${id}`, body);
  return response;
};

const deleteRole = async ({ id }) => {
  const response = await callApi.delete(`/roles/${id}`);
  return response;
};

export { addRoles, getAllRoles, getSingleRole, updateRole, deleteRole };
