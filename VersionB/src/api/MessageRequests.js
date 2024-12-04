import axios from 'axios'


const API = axios.create({ baseURL: 'https://beta06-combined.vercel.app/?vercelToolbarCode=N8Mb4XQw0_zmDpN' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);