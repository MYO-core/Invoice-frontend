import { callApi } from '../apiUtils';

const addStudent = async ({ body }) => {
  const response = await callApi.post(`/customers`, body);
  return response;
};

const getAllStudent = async ({ start, limit, roleId, search }) => {
  console.log(roleId);
  let roleQuery = roleId ? `&phone=${roleId}` : '';
  let searchQuery = search ? `&search=${search}` : '';
  const response = await callApi.get(`/customers?start=${start || 0}&limit=${limit || 10}${roleQuery}${searchQuery}`);
  return response;
};

const getSingleStudent = async ({ id }) => {
  const response = await callApi.get(`/customers/${id}`);
  return response;
};

const updateStudent = async ({ id, body }) => {
  const response = await callApi.patch(`/customers/${id}`, body);
  return response;
};

const deleteStudent = async (questionId) => {
  const response = await callApi.delete(`/customers/${questionId}`);
  return response;
};

export { getAllStudent, getSingleStudent, updateStudent, deleteStudent, addStudent };
