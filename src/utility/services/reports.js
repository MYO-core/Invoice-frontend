import { callApi } from '../apiUtils';

const getAllCms = async (dateString) => {
  let query = `?`;
  console.log('===', dateString);
  const { startTime, endTime } = dateString;
  query += dateString ? `&startDate=${startTime}&endDate=${endTime}` : '';
  const response = await callApi.get(`/restroItems/stats` + query);
  return response;
};

export { getAllCms };
