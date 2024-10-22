import React from 'react';
import './NavLinks.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';  // Import the auth context
import LoginModal from '../LoginModal/LoginModal';

const NavLinks = () => {
    const { openModal } = useModal();
    const { user } = useAuth();  // Get the logged-in user
    const navigate = useNavigate();

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
                    <NavLink
                        to="/dashboard"
                        className="nav__link"
                        activeClassName="active"
                        onClick={handleDashboardClick}
                    >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
