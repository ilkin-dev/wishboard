import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, children, size, onClick, disabled, variant }) => {
    const buttonClasses = `
    btn 
    btn--${type} 
    btn--${size} 
    btn--${variant}
    ${disabled ? 'btn--disabled' : ''}
  `;

    return (
        <button
            className={buttonClasses.trim()}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

// Prop Types for better dev experience
Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'outlined', 'text']),
};

// Default Props
Button.defaultProps = {
    type: 'primary',
    size: 'medium',
    disabled: false,
    variant: 'default',
};

export default Button;
