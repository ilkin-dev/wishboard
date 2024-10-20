import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './FooterSection.scss';

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <a href="/">WishBoard</a>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav__list">
                        <li className="footer__nav__item"><a href="/about" className="footer__nav__link">About</a></li>
                        <li className="footer__nav__item"><a href="/explore" className="footer__nav__link">Explore</a></li>
                        <li className="footer__nav__item"><a href="/contact" className="footer__nav__link">Contact</a></li>
                        <li className="footer__nav__item"><a href="/terms" className="footer__nav__link">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <ul className="footer__socials__list">
                        <li className="footer__socials__item">
                            <a href="https://twitter.com" className="footer__socials__link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="footer__socials__item">
                            <a href="https://facebook.com" className="footer__socials__link" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="footer__socials__item">
                            <a href="https://instagram.com" className="footer__socials__link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <p>© {new Date().getFullYear()} WishBoard. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
