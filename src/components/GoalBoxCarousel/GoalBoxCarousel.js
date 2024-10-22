import React from 'react';
import GoalBox from '../GoalBox/GoalBox';  // A reusable goal box component
import './GoalBoxCarousel.scss';

const GoalBoxCarousel = ({ goals }) => {
    // Logic for handling carousel scrolling, limiting items shown
    const goalBoxLimit = 6; // Limit number of visible goal boxes

    const limitedGoals = goals.slice(0, goalBoxLimit);  // Limit number of goals

    return (
        <div className="goal-box-carousel">
            {limitedGoals.length > 0 ? (
                <div className="goal-box-carousel__grid">
                    {limitedGoals.map((goal, index) => (
                        <GoalBox key={index} goal={goal} day={index + 1} />
                    ))}
                </div>
            ) : (
                <p>No goals available</p>
            )}

            {goals.length > goalBoxLimit && (
                <div className="goal-box-carousel__navigation">
                    <button className="goal-box-carousel__prev">←</button>
                    <button className="goal-box-carousel__next">→</button>
                </div>
            )}
        </div>
    );
};

export default GoalBoxCarousel;
