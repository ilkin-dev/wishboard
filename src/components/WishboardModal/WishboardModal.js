import React, { useState, useEffect } from 'react';
import './WishboardModal.scss';
import GoalBoxCarousel from '../GoalBoxCarousel/GoalBoxCarousel'; // A reusable carousel component
import apiClient from '../../api/axios';

const WishboardModal = ({ board, closeModal }) => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await apiClient.get(`/wishboards/${board.id}/goals`);
                setGoals(response.data || []);
            } catch (error) {
                console.error('Error fetching goals:', error);
            }
        };

        fetchGoals();
    }, [board.id]);

    return (
        <div className="wishboard-modal">
            <div className="wishboard-modal__overlay" onClick={closeModal}></div>
            <div className="wishboard-modal__content">
                <button className="wishboard-modal__close" onClick={closeModal}>
                    &times;
                </button>
                <h2 className="wishboard-modal__title">{board.title}</h2>
                <div className="wishboard-modal__details">
                    <p><strong>Start:</strong> {new Date(board.created_at).toLocaleDateString()}</p>
                    <p><strong>Due:</strong> {new Date(board.deadline).toLocaleDateString()}</p>
                    <p><strong>Description:</strong> {board.description}</p>
                </div>

                <GoalBoxCarousel goals={goals} />
            </div>
        </div>
    );
};

export default WishboardModal;
