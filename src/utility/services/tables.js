import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/tables`, body);
  return response;
};

const getAllTables = async ({ start = 0, limit = 10, search, type, isAvailable, store_id }) => {
  let searchQuery = search ? `&search=${search}` : ``;
  let typeQuery = type ? `&status=${type}` : ``;
  let storeQuery = store_id ? `&store_id=${store_id}` : ``;
  let isAvailableQ = isAvailable ? `&isAvailable=${isAvailable}` : ``;

  const response = await callApi.get(
    `/tables?start=${start}&limit=${limit}${searchQuery}${typeQuery}${isAvailableQ}${storeQuery}`,
  );
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/tables/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.patch(`/tables/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/tables/${id}`);
  return response;
};

export { addCms, getAllTables, getSingleCms, updateCms, deleteCms };
