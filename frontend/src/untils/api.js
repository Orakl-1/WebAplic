import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Убедитесь, что это соответствует URL вашего backend-сервера.
});

export default api;