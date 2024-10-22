import React from 'react';
import './NavLinks.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';  // Import the auth context
import LoginModal from '../LoginModal/LoginModal';

const NavLinks = ({ scrollToSection }) => {
    const { openModal } = useModal();
    const { user } = useAuth();  // Get the logged-in user
    const navigate = useNavigate();
    const location = useLocation();

    const handleDashboardClick = (e) => {
        e.preventDefault();

        if (user) {
            // User is logged in, navigate to the dashboard
            console.log('User is logged in, navigating to the dashboard...');
            navigate('/dashboard');
        } else {
            // User is not logged in, open the login modal
            console.log('User is not logged in, opening login modal...');
            openModal(<LoginModal />);
        }
    };

    const handleAboutClick = (e) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'about' } });
        } else {
            scrollToSection('about');
        }
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/#about">
                        About
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/explore" className="nav__link">
                        Explore
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/dashboard" className="nav__link" onClick={handleDashboardClick}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
