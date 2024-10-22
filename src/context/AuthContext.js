import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import apiClient from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({
                    name: decodedToken.name,
                    email: decodedToken.email,
                    profilePicture: decodedToken.picture,
                });
            } catch (error) {
                console.error('Failed to decode token on page load:', error);
            }
        }
    }, []);

    const login = async (googleToken) => {
        if (googleToken) {
            try {
                const response = await apiClient.post('/auth/google-auth', { token: googleToken });
                const { token, user } = response.data;

                setUser(user);
                localStorage.setItem('jwtToken', token);
                apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('jwtToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
