import React from "react";
import './BoardCard.scss';

const BoardCard = ({ board }) => {
    const { title, username, createdDate, deadlineDate, progress, thumbnail } = board;

    return (
        <div className="board-card">
            <div
                className="board-card__thumbnail"
                style={{ backgroundImage: `url(${thumbnail})` }}
            ></div>

            <div className="board-card__info">
                <h3 className="board-card__info__title">{title}</h3>
                <p className="board-card__info__user">
                    <span className="board-card__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="10"
                            height="10"
                        >
                            <circle cx="12" cy="12" r="8" fill="currentColor" />
                        </svg>
                    </span>
                    {username}
                </p>

                <div className="board-card__info__dates">
                    <div className="board-card__info__dates__block">
                        <span className="board-card__info__dates__label">Start:</span>
                        <span className="board-card__info__dates__created">{createdDate}</span>
                    </div>

                    <div className="board-card__info__dates__block">
                        <span className="board-card__info__dates__label">Due:</span>
                        <span className="board-card__info__dates__deadline">{deadlineDate}</span>
                    </div>
                </div>
            </div>

            <div className="board-card__progress">
                <div className="board-card__progress__bar">
                    <div
                        className="board-card__progress__bar__fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default BoardCard;
