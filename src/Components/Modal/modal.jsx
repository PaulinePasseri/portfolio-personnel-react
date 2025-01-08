import React from 'react';
import './modal.css';

export default function Modal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <p>{project.description}</p>
                <p><strong>Compétences :</strong> {project.competences}</p>
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-github-link"
                >
                    <span>Voir sur Github</span>
                </a>
                <img src={project.image} alt={project.title} />
            </div>
        </div>
    );
}
