import React from 'react';
import './LoginModal.scss'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useModal } from '../../context/ModalContext';

const LoginModal = () => {
    const { closeModal } = useModal();

    const handleLoginSuccess = (response) => {
        const token = response.credential; // Get the JWT token from Google response
        const decodedToken = jwtDecode(token); // Decode the token
        console.log(decodedToken.sub);

        // Store token in localStorage to maintain session
        localStorage.setItem('jwtToken', token);

        // Extract user information from decoded token
        const userProfile = {
            name: decodedToken.name,
            email: decodedToken.email,
            profilePicture: decodedToken.picture,
        };

        // Here you would set the global user state or context
        console.log('User Profile:', userProfile);

        // Close modal on successful login
        closeModal();

        // Reload page after successful logIn
        window.location.reload();
    };

    const handleLoginError = () => {
        console.error('Login Failed');
        closeModal();
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>X</button>
                <h2 className="modal-title">Login to Your Account</h2>
                <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
            </div>
        </div>
    );
};

export default LoginModal;
