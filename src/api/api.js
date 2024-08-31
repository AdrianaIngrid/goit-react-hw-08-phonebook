import axios from 'axios';
const BASE_URL = 'https://66c088d1ba6f27ca9a56f214.mockapi.io/';
const api = axios.create({
  baseURL: BASE_URL,
});

const resurseApi = resursa => {
    return {
        getAll: () => api.get(`${resursa}`),
        get: id => api.get(`${resursa}/${id}`),
        create: data => api.post(`${resursa}`, data),
        update: (id, data) => api.put(`${resursa}/${id}`, data),
        delete: id => api.delete(`${resursa}/${id}`),
    };
};
const contactsApi = resurseApi('contact');

export { contactsApi };