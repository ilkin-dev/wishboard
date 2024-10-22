import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IconButton.scss';

const IconButton = ({ icon, onClick, size, color }) => {
    const buttonClasses = `icon-btn icon-btn--${size} icon-btn--${color}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

IconButton.propTypes = {
    icon: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

IconButton.defaultProps = {
    size: 'medium',
    color: 'primary',
};

export default IconButton;
