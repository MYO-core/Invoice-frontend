import { callApi } from '../apiUtils';

const addCourse = async ({ body }) => {
  const response = await callApi.post(`/courses`, body);
  return response;
};

const getAllCourse = async ({ start, limit, search }) => {
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/courses?start=${start}&limit=${limit}${searchQuery}`);
  return response;
};

const getSingleCourse = async ({ id }) => {
  const response = await callApi.get(`/courses/${id}`);
  return response;
};

const updateCourse = async ({ id, body }) => {
  const response = await callApi.put(`/courses/${id}`, body);
  return response;
};

const deleteCourse = async ({ id }) => {
  const response = await callApi.delete(`/courses/${id}`);
  return response;
};

export { addCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse };
