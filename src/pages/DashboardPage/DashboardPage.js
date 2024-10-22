import React, { useEffect, useState } from 'react';
import './DashboardPage.scss';
import HeaderSection from '../../components/Header/HeaderSection';
import BoardCard from '../../components/BoardCard/BoardCard';
import FooterSection from '../../components/FooterSection/FooterSection';
import { userBoards } from '../../data/mockData';
import { jwtDecode } from 'jwt-decode';

const DashboardPage = () => {
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

    if (!userProfile) {
        return <div>Loading...</div>; // Wait until user profile is loaded
    }

    return (
        <div className="dashboard-page">
            <HeaderSection />
            <section className="dashboard-page__profile">
                <div className="dashboard-page__profile__wrapper">
                    <img src={userProfile.profilePicture} alt={`${userProfile.name}'s profile`} className="dashboard-page__profile__image" />
                    <div className="dashboard-page__profile__info">
                        <h2 className="dashboard-page__profile__name">{userProfile.name}</h2>
                        <p className="dashboard-page__profile__email">{userProfile.email}</p>
                    </div>
                </div>
            </section>

            <section className="dashboard-page__boards">
                <h2 className="dashboard-page__boards__title">Your Wishboards</h2>
                <div className="dashboard-page__boards__grid">
                    {userBoards.map((board) => (
                        <BoardCard key={board.id} board={board} editable />
                    ))}
                </div>
            </section>
            <FooterSection />
        </div>
    );
};

export default DashboardPage;
