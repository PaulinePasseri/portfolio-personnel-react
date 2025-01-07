import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css';
import Project from '../../Components/Project/project';
import Projet1 from '../../Assets/Projects/projet1.png';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const containerRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0); 
    const projectCount = 4;

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            // Focus sur le premier projet lors de l'apparition
            if (containerRef.current) {
                containerRef.current.querySelector('.project-button').focus();
            }
        }, 50);
    }, [location]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault(); 
            setFocusIndex((prevIndex) => (prevIndex + 1) % projectCount); 
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault(); 
            setFocusIndex((prevIndex) => (prevIndex - 1 + projectCount) % projectCount); 
        } else if (e.key === 'Enter' || e.key === ' ') {
            const currentProject = containerRef.current.querySelector(`.project-${focusIndex + 1} .project-link`);
            if (currentProject) {
                currentProject.click(); 
            }
        }
    };

    return (
        <div 
            className='projects-outer-container' 
            onKeyDown={handleKeyDown} 
            tabIndex={0} 
        >
            <div 
                className="projects-container" 
                ref={containerRef}
                role="group" 
                aria-labelledby="projects-title"
            >
                <h2 id="projects-title" className="sr-only">Projets</h2>
                <Project 
                    title="[001]" 
                    image={Projet1} 
                    link="https://paulinepasseri.github.io/quizzpokemon/" 
                    description="Quizz Pokemon" 
                    competences="JAVASCRIPT" 
                    className={`project project-1 ${isVisible ? 'animate' : ''}`}
                    isFocused={focusIndex === 0}
                />
                <Project 
                    title="[002]" 
                    image={Projet1} 
                    link="#" 
                    description="Description du projet 2"
                    competences="HTML, CSS"
                    className={`project project-2 ${isVisible ? 'animate' : ''}`}
                    isFocused={focusIndex === 1}
                />
                <Project 
                    title="[003]" 
                    image={Projet1} 
                    link="#" 
                    description="Description du projet 3"
                    competences="React"
                    className={`project project-3 ${isVisible ? 'animate' : ''}`}
                    isFocused={focusIndex === 2}
                />
                <Project 
                    title="[004]" 
                    image={Projet1} 
                    link="#" 
                    description="Description du projet 4"
                    competences="Node.js"
                    className={`project project-4 ${isVisible ? 'animate' : ''}`}
                    isFocused={focusIndex === 3}
                />
            </div>
        </div>
    );
}
