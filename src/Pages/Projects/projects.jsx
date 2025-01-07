import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css';
import Project from '../../Components/Project/project';
import Projet1 from '../../Assets/Projects/projet1.png';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const containerRef = useRef(null);

    // Animation d'apparition
    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
    }, [location]);

    return (
        <div className='projects-outer-container'>
            <div 
                className="projects-container" 
                ref={containerRef}
            >
                <Project 
                    title="[001]" 
                    image={Projet1} 
                    link="https://paulinepasseri.github.io/quizzpokemon/" 
                    description="Quizz Pokemon" 
                    competences="JAVASCRIPT" 
                    className={`project project-1 ${isVisible ? 'animate' : ''}`}
                />
                <Project 
                    title="[002]" 
                    image={Projet1} 
                    className={`project project-2 ${isVisible ? 'animate' : ''}`}
                />
                <Project 
                    title="[003]" 
                    image={Projet1} 
                    className={`project project-3 ${isVisible ? 'animate' : ''}`}
                />
                <Project 
                    title="[004]" 
                    image={Projet1} 
                    className={`project project-4 ${isVisible ? 'animate' : ''}`}
                />
            </div>
        </div>
    );
}
