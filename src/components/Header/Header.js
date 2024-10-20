import React, { useState } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import CTAButtons from '../CTAButtons/CTAButtons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <CTAButtons />
                <button className="header__burger" onClick={toggleMenu}>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
