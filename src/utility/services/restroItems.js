import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/restroItems`, body);
  return response;
};

const getAllCms = async ({ start = 0, limit = 10, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/restroItems?start=${start}&limit=${limit}${searchQuery}`);
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/restroItems/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.patch(`/restroItems/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/restroItems/${id}`);
  return response;
};

export { addCms, getAllCms, getSingleCms, updateCms, deleteCms };
