import React, { useState, useEffect } from 'react';
import apiClient from '../../api/axios';
import './ExplorePage.scss';
import BoardCard from '../../components/BoardCard/BoardCard';
import Filters from '../../components/Filters/Filters';
import HeaderSection from '../../components/Header/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import WishboardModal from '../../components/WishboardModal/WishboardModal';

const ExplorePage = () => {
    const [filters, setFilters] = useState({});
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);  // Track selected board for modal

    // Fetch all wishboards without pagination or infinite scroll
    const fetchBoards = async () => {
        try {
            const response = await apiClient.get('/wishboards'); // Fetch all boards at once
            const newBoards = response.data || [];

            setBoards(newBoards);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching wishboards:', error);
            setError('Failed to load wishboards');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBoards(); // Fetch all boards once when the component mounts
    }, []);

    if (loading) return <p>Loading wishboards...</p>;
    if (error) return <p className="explore-page__error">{error}</p>;

    return (
        <div className="explore-page">
            <HeaderSection />
            <h1 className="explore-page__title">Explore Wishboards</h1>
            <Filters filters={filters} setFilters={setFilters} />
            <div className="explore-page__boards">
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
                            editable={false}
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
            <FooterSection />
        </div>
    );
};

export default ExplorePage;
