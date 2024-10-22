import React, { useState, useEffect } from 'react';
import apiClient from '../../api/axios';
import './WishboardModal.scss';
import GoalBoxCarousel from '../GoalBoxCarousel/GoalBoxCarousel';

const WishboardModal = ({ board, closeModal }) => {
    const [goals, setGoals] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await apiClient.get(`/wishboards/${board.id}/goals`);
                setGoals(response.data || []);
            } catch (error) {
                console.error('Error fetching goals:', error);
            }
        };

        // Generate all days between created_at and deadline
        const generateDays = () => {
            const startDate = new Date(board.created_at);
            const endDate = new Date(board.deadline);
            const dayList = [];
            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                dayList.push(new Date(d));
            }
            setDays(dayList);
        };

        generateDays();
        fetchGoals();
    }, [board.id, board.created_at, board.deadline]);

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

                {/* Pass limited days and goals to the carousel */}
                <GoalBoxCarousel days={days} goals={goals} />
            </div>
        </div>
    );
};

export default WishboardModal;
