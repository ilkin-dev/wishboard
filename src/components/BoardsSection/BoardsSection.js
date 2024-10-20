import React from "react";
import './BoardsSection.scss';

import fitnessImage from '../../assets/images/fitness.jpg';
import travelImage from '../../assets/images/travel.jpg';

const boards = [
    {
        id: 1,
        title: "Fitness Goals",
        username: "JohnDoe",
        createdDate: "2024-10-01",
        deadlineDate: "2024-12-01",
        progress: 40,
        thumbnail: fitnessImage,
    },
    {
        id: 2,
        title: "Travel Plan",
        username: "JaneDoe",
        createdDate: "2024-09-10",
        deadlineDate: "2024-11-10",
        progress: 50,
        thumbnail: travelImage,
    },
];

const BoardsSection = () => {
    return (
        <section className="boards-section">
            <h2 className="boards-section__heading">Wishboards</h2>
            <div className="boards-section__grid">
                {boards.map((board) => (
                    <div key={board.id} className="boards-section__card">
                        <img src={board.thumbnail} alt={board.title} className="boards-section__card__thumbnail" />
                        <h3 className="boards-section__card__title">{board.title}</h3>
                        <p className="boards-section__card__username">By: {board.username}</p>
                        <p className="boards-section__card__dates">
                            Created: {board.createdDate} | Deadline: {board.deadlineDate}
                        </p>
                        <div className="boards-section__card__progress-bar">
                            <div
                                className="boards-section__card__progress-bar__fill"
                                style={{ width: `${board.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BoardsSection;
