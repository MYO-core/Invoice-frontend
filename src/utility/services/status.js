import { callApi } from '../apiUtils';

const addStatus = async ({ body }) => {
  const response = await callApi.post(`/status`, body);
  return response;
};

const getAllStatus = async ({ start, limit, StatusNumber, status }) => {
  const response = await callApi.get(`/status?start=${start}&limit=${limit}`);
  return response;
};

const getSingleStatus = async ({ id }) => {
  const response = await callApi.get(`/status/${id}`);
  return response;
};

const updateStatus = async ({ id, body }) => {
  const response = await callApi.put(`/status/${id}`, body);
  return response;
};

const deleteStatus = async ({ id }) => {
  const response = await callApi.delete(`/status/${id}`);
  return response;
};

export { addStatus, getAllStatus, getSingleStatus, updateStatus, deleteStatus };
