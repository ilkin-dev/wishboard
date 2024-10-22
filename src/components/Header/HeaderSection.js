import React, { useEffect, useState } from 'react';
import './HeaderSection.scss';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import CTAButtons from '../CTAButtons/CTAButtons';
import { jwtDecode } from 'jwt-decode';

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            try {
                const decodedToken = jwtDecode(jwtToken);
                setUserProfile({
                    name: decodedToken.name,
                    email: decodedToken.email,
                    profilePicture: decodedToken.picture,
                });
            } catch (error) {
                console.error('Invalid token:', error);
            }
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <NavLinks />
                </nav>
                <CTAButtons userProfile={userProfile} />
                <button className="header__burger" onClick={toggleMenu}>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </button>
            </div>
        </header>
    );
};

export default HeaderSection;
