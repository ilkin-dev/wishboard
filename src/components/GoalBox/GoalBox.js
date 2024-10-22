import React from 'react';
import './GoalBox.scss';

const GoalBox = ({ goal, day }) => {
    return (
        <div className="goal-box" onClick={() => console.log(`Goal for Day ${day}`)}>
            <div className="goal-box__content">
                <span>{goal.title || `Day ${day}`}</span>
            </div>
        </div>
    );
};

export default GoalBox;
