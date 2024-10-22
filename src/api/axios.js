import axios from 'axios';

// Create an axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// Add a request interceptor to include the token in each request
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');  // Get token from localStorage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;  // Add token to request headers
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
