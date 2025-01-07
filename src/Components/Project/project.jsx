import React, { forwardRef } from 'react';
import './project.css';

const Project = forwardRef(({
    link,
    image,
    title,
    description,
    competences,
    className,
}, ref) => {
    return (
        <div
            className={`project-button ${className}`}
            tabIndex={0} 
            ref={ref} 
        >
            <a
                className="project-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1} 
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
                        <h3 className="project-subtitle">[ Competences ]</h3>
                        <p>/ {competences}</p>
                    </div>
                </div>
            </a>
        </div>
    );
});

export default Project;
