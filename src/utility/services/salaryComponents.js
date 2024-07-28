import { callApi } from '../apiUtils';

const addCourse = async ({ body }) => {
  const response = await callApi.post(`/components`, body);
  return response;
};

const getAllCourse = async ({ start, limit, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/components?start=${start}&limit=${limit}${searchQuery}`);
  return response;
};

const getSingleCourse = async ({ id }) => {
  const response = await callApi.get(`/components/${id}`);
  return response;
};

const updateCourse = async ({ id, body }) => {
  const response = await callApi.put(`/components/${id}`, body);
  return response;
};

const deleteCourse = async ({ id }) => {
  const response = await callApi.delete(`/components/${id}`);
  return response;
};

export { addCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse };
