import React from 'react';
import './DashboardPage.scss';
import HeaderSection from '../../components/Header/HeaderSection';
import BoardCard from '../../components/BoardCard/BoardCard';
import { userBoards, userProfile } from '../../data/mockData';
import FooterSection from '../../components/FooterSection/FooterSection';
import IconButton from '../../components/IconButton/IconButton';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    const { name, email, profilePicture } = userProfile;

    return (
        <div className="dashboard-page">
            <HeaderSection />
            <section className="dashboard-page__profile">
                <div className="dashboard-page__profile__wrapper">
                    <img src={profilePicture} alt={`${name}'s profile`} className="dashboard-page__profile__image" />
                    <div className="dashboard-page__profile__info">
                        <h2 className="dashboard-page__profile__name">{name}</h2>
                        <p className="dashboard-page__profile__email">{email}</p>
                        <IconButton icon={faEdit} onClick={() => console.log('Edit board clicked')} size="small" color="primary" />
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
