import { callApi } from '../apiUtils';

const addOrder = async ({ body }) => {
  const response = await callApi.post(`/bookings`, body);
  return response;
};

const getAllOrder = async ({ start = 0, limit = 10, search, status }) => {
  const response = await callApi.get(
    `/bookings?start=${start}&limit=${limit}&status=${status ? status : ''}&search=${search ? search : ''}`,
  );
  return response;
};

const getSingleOrder = async ({ id }) => {
  const response = await callApi.get(`/bookings/${id}`);
  return response;
};

const updateOrder = async ({ id, body }) => {
  const response = await callApi.patch(`/bookings/${id}`, body);
  return response;
};

const deleteOrder = async ({ id }) => {
  const response = await callApi.delete(`/bookings/${id}`);
  return response;
};

export { addOrder, getAllOrder, getSingleOrder, updateOrder, deleteOrder };
