import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/orders`, body);
  return response;
};

const getAllCms = async ({ start, limit }) => {
  const response = await callApi.get(`/orders?start=${start}&limit=${limit}`);
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/orders/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.patch(`/orders/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/orders/${id}`);
  return response;
};

export { addCms, getAllCms, getSingleCms, updateCms, deleteCms };
