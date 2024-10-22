import React, { useState } from 'react';
import './HeaderSection.scss';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import CTAButtons from '../CTAButtons/CTAButtons';

const HeaderSection = () => {
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

export default HeaderSection;
