import { callApi } from '../apiUtils';

const addSubject = async ({ body }) => {
  const response = await callApi.post(`/subject`, body);
  return response;
};

const getAllSubject = async ({ start, limit, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/subject?start=${start}&limit=${limit}${searchQuery}`);
  return response;
};

const getSingleSubject = async ({ id }) => {
  const response = await callApi.get(`/subject/${id}`);
  return response;
};

const updateSubject = async ({ id, body }) => {
  const response = await callApi.put(`/subject/${id}`, body);
  return response;
};

const deleteSubject = async ({ id }) => {
  const response = await callApi.delete(`/subject/${id}`);
  return response;
};

export { addSubject, getAllSubject, getSingleSubject, updateSubject, deleteSubject };
