import axios from 'axios';

// Get token from localStorage
const token = localStorage.getItem('jwtToken');

// Create an axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        Authorization: token ? `Bearer ${token}` : '', // Attach token if it exists
        'Content-Type': 'application/json'
    }
});

export default apiClient;
