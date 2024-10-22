import React, { useState } from 'react';
import Button from '../Button/Button';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './CTAButtons.scss';

const CTAButtons = () => {
    const { openModal } = useModal();
    const { user, setUser } = useAuth(); // Use setUser to manage user logout
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCreateBoardClick = () => {
        if (!user) {
            openModal(
                <GoogleLogin
                    onSuccess={(response) => console.log('Login Success', response)}
                    onError={() => console.log('Login Failed')}
                />,
                'You need to log in to create a new board'
            );
        } else {
            // logic for creating a new board, e.g., opening a create board modal
        }
    };

    const handleLoginClick = () => {
        openModal(
            <GoogleLogin
                onSuccess={(response) => console.log('Login Success', response)}
                onError={() => console.log('Login Failed')}
            />,
            'Login to Your Account'
        );
    };

    // Toggle dropdown visibility for avatar
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Navigate to profile page
    const handleProfileClick = () => {
        navigate('/dashboard');
        setIsDropdownOpen(false);
    };

    // Handle log out
    const handleLogOut = () => {
        setUser(null); // Clear user data
        setIsDropdownOpen(false);
        localStorage.removeItem('jwtToken'); // Clear token from localStorage
        navigate('/');
    };

    return (
        <div className="cta-buttons">
            {user ? (
                <div className="cta-buttons__avatar-container">
                    <img
                        src={user.profilePicture}
                        alt={`${user.name}'s profile`}
                        className="cta-buttons__avatar"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="cta-buttons__avatar-dropdown">
                            <button onClick={handleProfileClick} className="cta-buttons__avatar-dropdown__item">
                                Profile
                            </button>
                            <button onClick={handleLogOut} className="cta-buttons__avatar-dropdown__item">
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Button
                    type="primary"
                    size="medium"
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
            )}
            <Button
                type="secondary"
                size="medium"
                onClick={handleCreateBoardClick}
            >
                Create Board
            </Button>
        </div>
    );
};

export default CTAButtons;
