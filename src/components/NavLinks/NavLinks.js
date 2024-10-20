import React from 'react';
import './NavLinks.scss';
import { useModal } from '../../context/ModalContext';
import { GoogleLogin } from '@react-oauth/google';

const NavLinks = () => {
    const { openModal } = useModal();

    const handleDashboardClick = (e) => {
        e.preventDefault();
        openModal(
            <GoogleLogin
                onSuccess={(response) => console.log('Login Success', response)}
                onError={() => console.log('Login Failed')}
            />, 'Please sign in to access the dashboard.'
        );
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/about" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="/explore" className="nav__link">Explore</a>
                </li>
                <li className="nav__item">
                    <a href="/dashboard" className="nav__link" onClick={handleDashboardClick}>
                        Dashboard
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
