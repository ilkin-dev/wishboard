import React from "react";
import './AboutSection.scss';

const AboutSection = () => {
    return (
        <section className="about">
            <h2 className="about__heading">About WishBoard</h2>
            <h3 className="about__subheading">Your dreams, your boards, your way.</h3>
            <div className="about__content">
                <p>
                    WishBoard helps you track and manage your dreams and goals with beautiful, customizable boards.
                    Whether it’s personal goals, professional aspirations, or keeping track of ideas, make it a reality with WishBoard.
                </p>
            </div>
            <div className="about__grid">
                <div className="about__grid__card">
                    <div className="about__grid__card__icon">🎯</div>
                    <h4 className="about__grid__card__heading">Goal Tracking</h4>
                    <p className="about__grid__card__content">
                        Set personal or professional goals and visualize your progress with customizable boards.
                    </p>
                </div>
                <div className="about__grid__card">
                    <div className="about__grid__card__icon">💡</div>
                    <h4 className="about__grid__card__heading">Creative Ideas</h4>
                    <p className="about__grid__card__content">
                        Capture and organize your best ideas, and transform them into actionable goals.
                    </p>
                </div>
                <div className="about__grid__card">
                    <div className="about__grid__card__icon">📈</div>
                    <h4 className="about__grid__card__heading">Track Your Progress</h4>
                    <p className="about__grid__card__content">
                        Keep track of your achievements and stay motivated as you work towards your dreams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
