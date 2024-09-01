import axios from 'axios';
const BASE_URL = 'https://connections-api.goit.global/';
const api = axios.create({
  baseURL: BASE_URL,
});
export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('authToken', token);
};
const resurseApi = resursa => {
    return {
        getAll: () => api.get(`${resursa}`),
        get: id => api.get(`${resursa}/${id}`),
        create: data => api.post(`${resursa}`, data),
        update: (id, data) => api.put(`${resursa}/${id}`, data),
        delete: id => api.delete(`${resursa}/${id}`),
    };
};
const contactsApi = resurseApi('contacts');
const userApi = {
  signup: async data => {
    const response = await api.post('/users/signup', data);
    setAuthHeader(response.data.token);
    return response;
  },
  login: async data => {
    const response = await api.post('/users/login', data);
    setAuthHeader(response.data.token);
    return response;
  },
  logout: async () => {
    await api.post('/users/logout');
    setAuthHeader(null);
  },
  currentUser: async () => {
    try {
      const response = await api.get('/users/current');
      return response.data;
    } catch (error) {
      console.error('Fetching current user failed:', error);
      throw error;
    }
  },
};

export { contactsApi, userApi };