import { callApi } from '../apiUtils';

const uploadImage = async (body) => {
  const response = await callApi.post(`/upload`, body);
  return response;
};

export { uploadImage };
