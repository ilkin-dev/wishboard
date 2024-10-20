import React from 'react';
import HeaderSection from '../../components/Header/HeaderSection';
import HeroSection from '../../components/Hero/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import BoardsSection from '../../components/BoardsSection/BoardsSection';

const Homepage = () => {

    return (
        <>
            <HeaderSection />
            <HeroSection />
            <BoardsSection />
            <AboutSection />
            <FooterSection />
        </>
    );
};

export default Homepage;
