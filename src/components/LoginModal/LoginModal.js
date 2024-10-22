import React from 'react';
import './LoginModal.scss';
import GoogleLoginButton from '../GoogleLoginButton';  // Use the reusable GoogleLoginButton component
import { useModal } from '../../context/ModalContext';  // Use ModalContext to control the modal

const LoginModal = () => {
    const { closeModal } = useModal();  // Get closeModal function from context

    const handleLoginSuccess = () => {
        closeModal();  // Close the modal after login
        window.location.reload();  // Optionally, reload or navigate to another page
    };

    const handleLoginError = () => {
        console.error('Login Failed');
        closeModal();  // Optionally close the modal if login fails, or leave it open
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>X</button>
                <h2 className="modal-header">Login to Your Account</h2>
                <GoogleLoginButton
                    onLoginSuccess={handleLoginSuccess}  // Call this when login is successful
                    onLoginError={handleLoginError}  // Handle login failure
                />
            </div>
        </div>
    );
};

export default LoginModal;
