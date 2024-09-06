import { callApi } from '../apiUtils';

const getHotelStats = async () => {
  const response = await callApi.get(`/dashboard/hotel`);
  return response;
};
const getRestrauntStats = async () => {
  const response = await callApi.get(`/dashboard/restraunt`);
  return response;
};

export { getRestrauntStats, getHotelStats };
