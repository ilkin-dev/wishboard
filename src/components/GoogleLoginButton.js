import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';  // Use your auth context

const GoogleLoginButton = ({ onLoginSuccess, onLoginError }) => {
    const { login } = useAuth();  // Get the login function from AuthContext

    const handleLoginSuccess = (response) => {
        login(response.credential);  // Call login from AuthContext
        if (onLoginSuccess) onLoginSuccess();  // Call any additional logic passed via props (e.g., closing the modal)
    };

    const handleLoginError = (error) => {
        console.error('Login Failed', error);
        if (onLoginError) onLoginError();  // Call any additional logic passed via props (e.g., handling errors)
    };

    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}  // Success callback
            onError={handleLoginError}  // Error callback
            type="standard"
            theme="outline"
            shape="rectangular"
            size="large"
        />
    );
};

export default GoogleLoginButton;
