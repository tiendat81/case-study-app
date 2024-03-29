import axiosClient from './axiosClient';

const employeeApi = {
  getAll(params) {
    const url = '/users';
    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/users';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/users/${data.id}`;
    return axiosClient.put(url, data);
  },

  remove(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default employeeApi;
