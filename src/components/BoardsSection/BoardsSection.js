import React, { useEffect, useState } from 'react';
import apiClient from '../../api/axios';  // Axios instance to interact with the API
import BoardCard from '../BoardCard/BoardCard';  // Use the existing BoardCard component
import WishboardModal from '../WishboardModal/WishboardModal';  // Modal for Wishboard details
import './BoardsSection.scss';
import { NavLink } from 'react-router-dom';

const BoardsSection = () => {
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedBoard, setSelectedBoard] = useState(null);  // Track selected board for modal

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await apiClient.get('/wishboards');
                setBoards(response.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching boards:', error);
                setError('Failed to load boards');
                setLoading(false);
            }
        };

        fetchBoards();
    }, []);

    // Handle loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="boards-section__error">{error}</p>;

    return (
        <section className="boards-section">
            <h2 className="boards-section__heading">Wishboards</h2>
            <div className="boards-section__grid">
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
                <NavLink to="/explore" className="boards-section__show-more" activeClassName="nav__link--active">
                    Show More
                </NavLink>
            </div>
            {selectedBoard && (
                <WishboardModal
                    board={selectedBoard}
                    closeModal={() => setSelectedBoard(null)}  // Close modal
                />
            )}
        </section>
    );
};

export default BoardsSection;
