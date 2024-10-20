import React from 'react';
import './BoardCard.scss';

const BoardCard = ({ title, username, createdDate, deadlineDate, progress, thumbnail }) => {
    return (
        <div className="board-card">
            <img src={thumbnail} alt={title} className="board-card__thumbnail" />
            <div className="board-card__content">
                <h3 className="board-card__title">{title}</h3>
                <p className="board-card__username">By: {username}</p>
                <p className="board-card__dates">
                    Created: {createdDate} | Deadline: {deadlineDate}
                </p>
                <div className="board-card__progress">
                    <div className="board-card__progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default BoardCard;
