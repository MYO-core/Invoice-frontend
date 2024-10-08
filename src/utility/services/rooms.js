import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/rooms`, body);
  return response;
};

const getAllCms = async ({ start = 0, limit = 10, search, type, isAvailable, store_id }) => {
  let searchQuery = search ? `&search=${search}` : ``;
  let typeQuery = type ? `&roomType=${type}` : ``;
  let storeQuery = store_id ? `&store_id=${store_id}` : ``;
  let isAvailableQ = isAvailable ? `&isAvailable=${isAvailable}` : ``;

  const response = await callApi.get(
    `/rooms?start=${start}&limit=${limit}${searchQuery}${typeQuery}${isAvailableQ}${storeQuery}`,
  );
  return response;
};

const getSingleCms = async ({ id }) => {
  const response = await callApi.get(`/rooms/${id}`);
  return response;
};

const updateCms = async ({ id, body }) => {
  const response = await callApi.patch(`/rooms/${id}`, body);
  return response;
};

const deleteCms = async ({ id }) => {
  const response = await callApi.delete(`/rooms/${id}`);
  return response;
};

export { addCms, getAllCms, getSingleCms, updateCms, deleteCms };
