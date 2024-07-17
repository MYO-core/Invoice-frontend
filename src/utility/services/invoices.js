import { callApi } from '../apiUtils';

const addOrg = async ({ body }) => {
  const response = await callApi.post(`/bills`, body);
  return response;
};

const getAllOrg = async ({ start, limit, store_id, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  let storeQuery = store_id ? `&store_id=${store_id}` : '';
  const response = await callApi.get(`/bills?start=${start || 0}&limit=${limit || 10}${storeQuery}${searchQuery}`);
  return response;
};

const getSingleOrg = async ({ id }) => {
  const response = await callApi.get(`/bills/${id}`);
  return response;
};

const updateOrg = async ({ id, body }) => {
  const response = await callApi.patch(`/bills/${id}`, body);
  return response;
};

const deleteOrg = async (questionId) => {
  const response = await callApi.delete(`/bills/${questionId}`);
  return response;
};

const download = async (questionId) => {
  const response = await callApi.download(`/bills/pdf/${questionId}`);
  return response;
};

export { addOrg, getAllOrg, getSingleOrg, updateOrg, deleteOrg, download };
