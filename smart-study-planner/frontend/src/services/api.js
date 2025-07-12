import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTasks = (userId) => API.get(`/tasks/${userId}`);
export const addTask = (task) => API.post('/tasks', task);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);