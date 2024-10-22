import React, { useState } from 'react';
import Button from '../Button/Button';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import './CTAButtons.scss';
const CTAButtons = () => {
    const { openModal } = useModal();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault();
        openModal(<LoginModal />);
    };

    const handleCreateBoardClick = () => {
        if (!user) {
            handleLoginClick();
        } else {
            console.log('User is logged in, create board logic can proceed...');
            // logic for creating a new board, e.g., opening a create board modal
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleProfileClick = () => {
        navigate('/dashboard');
        setIsDropdownOpen(false);
    };

    const handleLogOut = () => {
        logout();
        setIsDropdownOpen(false);
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
                <Button type="primary" size="medium" onClick={handleLoginClick}>
                    Login
                </Button>
            )}
            <Button type="secondary" size="medium" onClick={handleCreateBoardClick}>
                Create Board
            </Button>
        </div>
    );
};

export default CTAButtons;
