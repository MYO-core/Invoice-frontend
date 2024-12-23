import { callApi } from '../apiUtils';

const getAllCms = async ({ dateString }) => {
  let query = ``;
  query += dateString ? `interval=${dateString}` : '';
  const response = await callApi.get(`/restroItems/stats?` + query);
  return response;
};

export { getAllCms };
