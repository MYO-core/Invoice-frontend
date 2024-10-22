import { callApi } from '../apiUtils';

const addCms = async ({ body }) => {
  const response = await callApi.post(`/orders`, body);
  return response;
};

const getAllCms = async ({ start, limit, status, search, dates, currentStore }) => {
  let searchQuery = search ? `&search=${search}` : '';
  let statusQuery = status ? `&status=${status}` : '';
  let storeQuery = currentStore ? `&store_id=${currentStore}` : '';
  let dateQuery = '';
  if (dates.length === 2) {
    dateQuery = `&start_date=${dates[0]}&end_date=${dates[1]}`;
  }
  const response = await callApi.get(
    `/orders?start=${start}&limit=${limit}${searchQuery}${statusQuery}${dateQuery}${storeQuery}`,
  );
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
