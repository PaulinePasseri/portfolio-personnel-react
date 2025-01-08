import React, { forwardRef } from 'react';
import './project.css';

const Project = forwardRef(({
    image,
    title,
    description,
    competences,
    className,
    onClick, 
}, ref) => {
    return (
        <div
            className={`project-button ${className}`}
            tabIndex={0}
            ref={ref}
            onClick={onClick} 
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick(); 
                }
            }}
            role="button" 
        >
            <h2 className="project-title">{title}</h2>
            <div className="project-content">
                <img
                    className="project-img"
                    src={image}
                    alt={`Projet ${title}`}
                />
                <div className="project-txt">
                    <h3 className="project-subtitle">[ Description ]</h3>
                    <p>{description}</p>
                    <h3 className="project-subtitle">[ Compétences ]</h3>
                    <p>/ {competences}</p>
                </div>
            </div>
        </div>
    );
});

export default Project;

