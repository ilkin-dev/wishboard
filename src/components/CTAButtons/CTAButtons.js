import React from 'react';
import Button from '../Button/Button';
import { useModal } from '../../context/ModalContext';
import { GoogleLogin } from '@react-oauth/google';
import './CTAButtons.scss';

const CTAButtons = () => {
    const { openModal } = useModal();

    const handleCreateBoardClick = () => {
        openModal(
            <GoogleLogin
                onSuccess={(response) => console.log('Login Success', response)}
                onError={() => console.log('Login Failed')}
            />, 'You are logging in through Google'
        );
    };

    const handleLoginClick = () => {
        openModal(
            <GoogleLogin
                onSuccess={(response) => console.log('Login Success', response)}
                onError={() => console.log('Login Failed')}
            />, 'You need to log in to create a new board'
        );
    };

    return (
        <div className="cta-buttons">
            <Button
                type="primary"
                size="medium"
                onClick={handleLoginClick}
            >
                Login
            </Button>
            <Button
                type="tertiary"
                size="medium"
                onClick={handleCreateBoardClick}
            >
                Create Board
            </Button>
        </div>
    );
};

export default CTAButtons;
