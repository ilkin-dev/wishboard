import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if a JWT token is stored in localStorage on load
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            setUser({
                name: decodedToken.name,
                email: decodedToken.email,
                profilePicture: decodedToken.picture,
            });
        }
    }, []);

    const login = (token) => {
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                setUser({
                    name: decodedToken.name,
                    email: decodedToken.email,
                    profilePicture: decodedToken.picture,
                });
                localStorage.setItem('jwtToken', token);
            } catch (error) {
                console.error('Failed to decode token:', error);
                // Handle token decoding failure (e.g., show an error message)
            }
        } else {
            console.error('No token received');
            // Handle missing token (e.g., show an error message)
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
