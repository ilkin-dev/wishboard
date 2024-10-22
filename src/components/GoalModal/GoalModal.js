import React from 'react';
import './GoalModal.scss';
import { useModal } from '../../context/ModalContext';

const GoalModal = ({ goal }) => {
    const { closeModal } = useModal();

    return (
        <div className="goal-modal">
            <div className="goal-modal__header">
                <h2>{goal.title}</h2>
                <button onClick={closeModal} className="goal-modal__close">X</button>
            </div>
            <p className="goal-modal__description">{goal.description}</p>
            <div className="goal-modal__dates">
                <span><strong>Due Date:</strong> {goal.deadlineDate}</span>
            </div>
        </div>
    );
};

export default GoalModal;
