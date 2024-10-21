import React from "react";
import './BoardsSection.scss';
import BoardCard from "../BoardCard/BoardCard";
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
    {
        id: 3,
        title: "Fitness Goals",
        username: "JohnDoe",
        createdDate: "2024-10-01",
        deadlineDate: "2024-12-01",
        progress: 40,
        thumbnail: fitnessImage,
    },
    {
        id: 4,
        title: "Travel Plan",
        username: "JaneDoe",
        createdDate: "2024-09-10",
        deadlineDate: "2024-11-10",
        progress: 50,
        thumbnail: travelImage,
    },
    {
        id: 5,
        title: "Fitness Goals",
        username: "JohnDoe",
        createdDate: "2024-10-01",
        deadlineDate: "2024-12-01",
        progress: 40,
        thumbnail: fitnessImage,
    }
];

const BoardsSection = () => {
    return (
        <section className="boards-section">
            <h2 className="boards-section__heading">Wishboards</h2>
            <div className="boards-section__grid">
                {boards.map((board) => (
                    <BoardCard key={board.id} board={board} />
                ))}
                <div className="boards-section__show-more">
                    Show More
                </div>
            </div>
        </section>
    );
};

export default BoardsSection;
