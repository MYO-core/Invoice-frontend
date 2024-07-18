import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/products`, body);
  return response;
};

const getAllCms = async ({ start, limit }) => {
  const response = await callApi.get(`/products?start=${start}&limit=${limit}`);
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/products/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.patch(`/products/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/products/${id}`);
  return response;
};

export { addCms, getAllCms, getSingleCms, updateCms, deleteCms };
