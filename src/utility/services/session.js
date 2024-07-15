import { callApi } from '../apiUtils';

const addSession = async ({ body }) => {
  const response = await callApi.post(`/session`, body);
  return response;
};

const getAllSession = async ({ start, limit, SessionNumber, session }) => {
  const response = await callApi.get(`/session?start=${start}&limit=${limit}`);
  return response;
};

const getSingleSession = async ({ id }) => {
  const response = await callApi.get(`/session/${id}`);
  return response;
};

const updateSession = async ({ id, body }) => {
  const response = await callApi.put(`/session/${id}`, body);
  return response;
};

const deleteSession = async ({ id }) => {
  const response = await callApi.delete(`/session/${id}`);
  return response;
};

export { addSession, getAllSession, getSingleSession, updateSession, deleteSession };
