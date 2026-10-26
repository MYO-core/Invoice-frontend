import { callApi } from '../apiUtils';

const getPlatformStats = async () => {
  const response = await callApi.get(`/admin/stats`);
  return response;
};

const getTenants = async ({ start, limit, search, status, includeDeleted }) => {
  const searchQuery = search ? `&search=${search}` : '';
  const statusQuery = status ? `&status=${status}` : '';
  const deletedQuery = includeDeleted ? `&includeDeleted=true` : '';
  const response = await callApi.get(
    `/admin/tenants?start=${start || 0}&limit=${limit || 10}${searchQuery}${statusQuery}${deletedQuery}`,
  );
  return response;
};

const getTenant = async ({ id }) => {
  const response = await callApi.get(`/admin/tenants/${id}`);
  return response;
};

const createTenant = async (body) => {
  const response = await callApi.post(`/admin/tenants`, body);
  return response;
};

const updateTenant = async ({ id, body }) => {
  const response = await callApi.patch(`/admin/tenants/${id}`, body);
  return response;
};

const updateTenantStatus = async ({ id, body }) => {
  const response = await callApi.patch(`/admin/tenants/${id}/status`, body);
  return response;
};

const deleteTenant = async ({ id }) => {
  const response = await callApi.delete(`/admin/tenants/${id}`);
  return response;
};

export { getPlatformStats, getTenants, getTenant, createTenant, updateTenant, updateTenantStatus, deleteTenant };
