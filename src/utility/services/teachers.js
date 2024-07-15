import { callApi } from '../apiUtils';

const addStudent = async ({ body }) => {
  const response = await callApi.post(`/teachers`, body);
  return response;
};

const getAllStudent = async ({ start, limit, roleId, search }) => {
  let roleQuery = roleId ? `&roleId=${roleId}` : '';
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/teachers?start=${start || 0}&limit=${limit || 10}${roleQuery}${searchQuery}`);
  return response;
};

const getSingleStudent = async ({ id }) => {
  const response = await callApi.get(`/teachers/${id}`);
  return response;
};

const updateStudent = async ({ id, body }) => {
  const response = await callApi.patch(`/teachers/${id}`, body);
  return response;
};

const deleteStudent = async (questionId) => {
  const response = await callApi.delete(`/teachers/${questionId}`);
  return response;
};

export { getAllStudent, getSingleStudent, updateStudent, deleteStudent, addStudent };
