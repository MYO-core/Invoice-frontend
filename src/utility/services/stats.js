import { callApi } from '../apiUtils';

const getStats = async () => {
  const response = await callApi.get(`/stats`);
  return response;
};

export { getStats };
