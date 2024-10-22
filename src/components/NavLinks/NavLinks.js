import React from 'react';
import './NavLinks.scss';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import LoginModal from '../LoginModal/LoginModal';

const NavLinks = () => {
    const { openModal } = useModal();

    const handleDashboardClick = (e) => {
        e.preventDefault();
        openModal(<LoginModal />);
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
                    <NavLink to="/dashboard" className="nav__link" activeClassName="active" onClick={handleDashboardClick}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
