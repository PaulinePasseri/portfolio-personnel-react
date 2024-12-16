// src/Components/Header/MenuItem.jsx
import React, { useState } from 'react';
import { useGlitch } from 'react-powerglitch';

const MenuItem = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const glitch = useGlitch({
        playMode: 'manual',
        timing: {
            duration: 500,
            iterations: 1
        }
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
        glitch.startGlitch();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        glitch.stopGlitch();
    };

    return (
        <span
            ref={glitch.ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`glitch-effect ${isHovered ? 'hovered' : ''}`}
        >
            {text}
        </span>
    );
};

export default MenuItem;
