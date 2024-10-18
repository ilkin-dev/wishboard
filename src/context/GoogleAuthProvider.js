import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuthProviderWrapper = ({ children }) => {
    return (
        <GoogleOAuthProvider clientId="665690023472-iu72oi19rl9mf532s8p6eot6t6m5k2m5.apps.googleusercontent.com">
            {children}
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthProviderWrapper;
