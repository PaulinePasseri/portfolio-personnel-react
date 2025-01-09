import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Vérifier si c'est un appareil tactile
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);

        if (!isTouchDevice) {
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
                window.removeEventListener('resize', checkTouchDevice);
            };
        }
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

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
