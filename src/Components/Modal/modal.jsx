import React, { useRef, useEffect } from 'react';
import './modal.css';

export default function Modal({ isOpen, onClose, project }) {
    const linkRef = useRef(null);

    useEffect(() => {
        if (isOpen && linkRef.current) {
            linkRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(project.githubLink, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <p className='modal-title'><strong>{project.description}</strong></p>
                <p className='modal-subtext'>{project.details}</p>
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-github-link"
                    ref={linkRef}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <span>Voir sur Github</span>
                </a>
                <img src={project.image} alt={project.title} />
            </div>
        </div>
    );
}
