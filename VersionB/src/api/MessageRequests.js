import axios from 'axios'


const API = axios.create({ baseURL: 'https://beta06-combined-1.onrender.com' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);