import axios from 'axios'


const API = axios.create({ baseURL: 'https://beta06-combined.vercel.app/?vercelToolbarCode=N8Mb4XQw0_zmDpN' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);