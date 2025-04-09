import axios from 'axios';


const api = axios.create({
  baseURL: 'http://0.0.0.0:8000',
});

export const authService = {

  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });
      return response.data;
    } 
    catch (error) {
      throw error.response?.data?.detail || 'Произошла ошибка при авторизации';
    }
  }
}; 