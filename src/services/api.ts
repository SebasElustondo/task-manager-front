import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
    baseURL: API_URL,
});

export const getTasks = async () => {
    const response = await api.get('/');
    return response.data;
};

export const getTaskByID = async (id: number) => {
    const response = await api.get(`/${id}`);
    return response.data;
};

export const createTask = async (task: { title: string; description?: string; completed?: boolean}) => {
    const response = await api.post('/', task);
    return response.data;
};

export const updateTask = async (id: number, task: { title?: string; description?: string; completed?: boolean }) => {
    const response = await api.put(`/${id}`, task);
    return response.data;
};

export const deleteTask = async (id: number) => {
    await api.delete(`/${id}`);
};