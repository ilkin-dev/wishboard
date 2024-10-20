import React from 'react';
import Button from '../Button/Button'; // Assuming Button is a reusable component
import './HeroSection.scss';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__heading">Track Your Wishes</h1>
                <p className="hero__subheading">Make your dreams a reality with WishBoard</p>
                <Button className="hero__cta" >Get Started </Button>
            </div>
        </section>
    );
};

export default HeroSection;
