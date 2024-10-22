import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSection from '../../components/Header/HeaderSection';
import HeroSection from '../../components/Hero/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import BoardsSection from '../../components/BoardsSection/BoardsSection';

const Homepage = () => {
    const aboutRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <HeaderSection />
            <HeroSection />
            <BoardsSection />
            <div ref={aboutRef}>
                <AboutSection />
            </div>
            <FooterSection />
        </>
    );
};

export default Homepage;
