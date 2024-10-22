import React, { useState, useEffect } from 'react';
import apiClient from '../../api/axios';
import BoardCard from '../../components/BoardCard/BoardCard';
import HeaderSection from '../../components/Header/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import './DashboardPage.scss';
import { jwtDecode } from 'jwt-decode'; // Ensure correct import without curly braces
import WishboardModal from '../../components/WishboardModal/WishboardModal';

const DashboardPage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);  // Track selected board for modal

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
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

        // Fetch the user's wishboards
        const fetchUserBoards = async () => {
            try {
                const response = await apiClient.get('/wishboards/user');
                setBoards(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user wishboards:', error);
                setError('Failed to load your wishboards');
                setLoading(false);
            }
        };

        fetchUserBoards();
    }, []);

    // Handle loading state
    if (loading) return <p>Loading your wishboards...</p>;

    // Handle error state
    if (error) return <p>{error}</p>;

    return (
        <div className="dashboard-page">
            <HeaderSection />
            <section className="dashboard-page__profile">
                <div className="dashboard-page__profile__wrapper">
                    <img
                        src={userProfile?.profilePicture || '/default-avatar.png'}
                        alt={`${userProfile?.name}'s profile`}
                        className="dashboard-page__profile__image"
                    />
                    <div className="dashboard-page__profile__info">
                        <h2 className="dashboard-page__profile__name">{userProfile?.name}</h2>
                        <p className="dashboard-page__profile__email">{userProfile?.email}</p>
                    </div>
                </div>
            </section>
            <section className="dashboard-page__boards">
                <h2 className="dashboard-page__boards__title">Your Wishboards</h2>
                <div className="dashboard-page__boards__grid">
                    {boards.length > 0 ? (
                        boards.map((board) => (
                            <BoardCard
                                key={board.id}
                                board={{
                                    thumbnail: board.thumbnail,
                                    title: board.title,
                                    username: board.username,
                                    createdDate: new Date(board.created_at).toLocaleDateString(),
                                    deadlineDate: new Date(board.deadline).toLocaleDateString(),
                                    progress: board.progress,
                                }}
                                onClick={() => setSelectedBoard(board)}  // Open modal on click
                                editable={true}
                            />
                        ))
                    ) : (
                        <p>No boards available</p>
                    )}
                    {selectedBoard && (
                        <WishboardModal
                            board={selectedBoard}
                            closeModal={() => setSelectedBoard(null)}  // Close modal
                        />
                    )}
                </div>
            </section>
            <FooterSection />
        </div>
    );
};

export default DashboardPage;
