import React from 'react';
import './NavLinks.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { GoogleLogin } from '@react-oauth/google';

const NavLinks = () => {
    const location = useLocation();
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
                    <NavLink to="/about" className="nav__link" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/explore" className="nav__link" activeClassName="active">
                        Explore
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/dashboard" className="nav__link" activeClassName="active">
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
