import React from 'react';
import './BoardCard.scss';
import IconButton from '../IconButton/IconButton';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const BoardCard = ({ board, editable, onClick }) => {
    return (
        <div className="board-card" onClick={onClick}>
            <img src={board.thumbnail} alt={board.title} className="board-card__thumbnail" />
            <div className="board-card__content">
                <h3 className="board-card__title">{board.title}</h3>
                {!editable && (
                    <p className="board-card__username">
                        <span className="board-card__icon">•</span> {board.username}
                    </p>
                )}
                <div className="board-card__dates">
                    <span className="board-card__date">
                        <strong>Start:</strong> {board.createdDate}
                    </span>
                    <span className="board-card__date">
                        <strong>Due:</strong> {board.deadlineDate}
                    </span>
                </div>
                <div className="board-card__progress">
                    <div
                        className="board-card__progress-bar"
                        style={{ width: `${board.progress}%` }}
                    ></div>
                </div>
                {editable && (
                    <div className="board-card__actions">
                        <IconButton
                            icon={faEdit}
                            onClick={() => console.log('Edit board clicked')}
                            size="small"
                            color="primary"
                        />
                        <IconButton
                            icon={faTrashAlt}
                            onClick={() => console.log('Delete board clicked')}
                            size="small"
                            color="danger"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BoardCard;
