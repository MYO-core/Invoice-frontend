import { callApi } from '../apiUtils';

const addOrg = async ({ body }) => {
  const response = await callApi.post(`/invoices`, body);
  return response;
};

const getAllOrg = async ({ start, limit, store_id, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  let storeQuery = store_id ? `&store_id=${store_id}` : '';
  const response = await callApi.get(`/invoices?start=${start || 0}&limit=${limit || 10}${storeQuery}${searchQuery}`);
  return response;
};

const getSingleOrg = async ({ id }) => {
  const response = await callApi.get(`/invoices/${id}`);
  return response;
};

const updateOrg = async ({ id, body }) => {
  const response = await callApi.patch(`/invoices/${id}`, body);
  return response;
};

const deleteOrg = async (questionId) => {
  const response = await callApi.delete(`/invoices/${questionId}`);
  return response;
};

const download = async (questionId) => {
  const response = await callApi.download(`/invoices/pdf/${questionId}`);
  return response;
};

export { addOrg, getAllOrg, getSingleOrg, updateOrg, deleteOrg, download };
