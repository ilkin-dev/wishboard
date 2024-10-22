import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';  // Import JWT decode library

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
                console.error('Failed to decode token:', error);
            }
        }
    }, []);

    const login = (token) => {
        if (token) {
            try {
                if (typeof token !== 'string') {
                    throw new Error('Token must be a string');
                }

                const decodedToken = jwtDecode(token);  // Decode the token

                setUser({
                    name: decodedToken.name,
                    email: decodedToken.email,
                    profilePicture: decodedToken.picture,
                });
                localStorage.setItem('jwtToken', token); // Store the token
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        } else {
            console.error('No token received');
        }
    };

    const logout = () => {
        console.log('Logging out user...');
        setUser(null);
        localStorage.removeItem('jwtToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
