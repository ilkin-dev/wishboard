import React from 'react';
import './GoalBox.scss';

const GoalBox = ({ day, goal, isPassedDay, isCurrentDay }) => {
    // Apply styles based on whether the day is passed or the current day
    const dayStyle = isCurrentDay
        ? 'goal-box--current'  // Secondary color for today
        : isPassedDay
            ? 'goal-box--passed'   // Faded color for passed days
            : '';

    return (
        <div className={`goal-box ${dayStyle}`}>
            <div className="goal-box__day-number">
                {day.getDate()}  {/* Show just the day of the month */}
            </div>
        </div>
    );
};

export default GoalBox;
