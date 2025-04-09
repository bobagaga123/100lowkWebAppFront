import axios from 'axios';


const api = axios.create({
  baseURL: 'http://0.0.0.0:8000', // Замените на ваш URL сервера
});

export const authService = {
  // Функция для входа
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