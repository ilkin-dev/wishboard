import React, { useEffect, useState } from 'react';
import apiClient from '../../api/axios';  // Axios instance to interact with the API
import BoardCard from '../BoardCard/BoardCard';  // Use the existing BoardCard component
import './BoardsSection.scss';
import { NavLink } from 'react-router-dom';

const BoardsSection = () => {
    const [boards, setBoards] = useState([]);  // Ensure that boards is initialized as an empty array
    const [error, setError] = useState(null);  // State to handle errors
    const [loading, setLoading] = useState(true);  // Add a loading state

    useEffect(() => {
        // Fetch boards from the back-end API
        const fetchBoards = async () => {
            try {
                const response = await apiClient.get('/wishboards');  // Fetch the boards
                setBoards(response.data || []);  // Ensure that we set boards to an empty array if undefined
                setLoading(false);
            } catch (error) {
                console.error('Error fetching boards:', error);
                setError('Failed to load boards');
                setLoading(false);  // Stop loading on error
            }
        };

        fetchBoards();
    }, []);  // Run this effect only once on component mount

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
                                thumbnail: board.thumbnail, // Replace this with the actual field from the API
                                title: board.title,
                                username: board.username,  // Now using the username from the API
                                createdDate: new Date(board.created_at).toLocaleDateString(),  // Adjust for your date format
                                deadlineDate: new Date(board.deadline).toLocaleDateString(),  // Replace with the actual deadline field
                                progress: board.progress,  // Assuming progress is a percentage
                            }}
                            editable={false}  // If this board is not editable by the user
                        />
                    ))
                ) : (
                    <p>No boards available</p>
                )}
                <NavLink to={"/explore"} className="boards-section__show-more" activeClassName="nav__link--active">
                    Show More
                </NavLink>
            </div>
        </section>
    );
};

export default BoardsSection;
