import React, { useState } from 'react';
import GoalBox from '../GoalBox/GoalBox';
import './GoalBoxCarousel.scss';

const isSameDay = (date1, date2) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

const GoalBoxCarousel = ({ days, goals }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 9;  // Show 9 goal boxes at once

    // Function to handle next set of goal boxes
    const nextPage = () => {
        if (currentIndex + itemsPerPage < days.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    // Function to handle previous set of goal boxes
    const prevPage = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    // Create goal boxes for the current view
    const displayedDays = days.slice(currentIndex, currentIndex + itemsPerPage);

    const today = new Date();  // Get today's date

    return (
        <div className="goal-box-carousel">
            <button onClick={prevPage} className="goal-box-carousel__arrow">&lt;</button>
            <div className="goal-box-carousel__container">
                {displayedDays.map((day, index) => {
                    const goalForDay = goals.find(goal => new Date(goal.deadline).toDateString() === day.toDateString());
                    const isPassedDay = day < today;
                    const isCurrentDay = isSameDay(day, today);

                    return (
                        <GoalBox
                            key={index}
                            day={day}
                            goal={goalForDay}  // This could be null if no goal exists for that day
                            isPassedDay={isPassedDay}
                            isCurrentDay={isCurrentDay}
                        />
                    );
                })}
            </div>
            <button onClick={nextPage} className="goal-box-carousel__arrow">&gt;</button>
        </div>
    );
};

export default GoalBoxCarousel;
