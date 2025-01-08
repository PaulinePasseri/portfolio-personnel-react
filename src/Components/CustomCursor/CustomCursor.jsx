import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => {
            setIsClicked(true);
        };

        const handleMouseUp = () => {
            setIsClicked(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return ReactDOM.createPortal(
        <div
            className={`custom-cursor ${isClicked ? 'clicked' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>,
        document.body
    );
};

export default CustomCursor;
