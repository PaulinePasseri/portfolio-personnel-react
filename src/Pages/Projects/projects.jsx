import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css';
import Project from '../../Components/Project/project';
import Modal from '../../Components/Modal/modal';
import Projet1 from '../../Assets/Projects/projet-sophiebluel.png';
import Projet2 from '../../Assets/Projects/projet-ninacarducci.png';
import Projet3 from '../../Assets/Projects/projet-724events.png';
import Projet4 from '../../Assets/Projects/projet-kasa.png';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [modalProject, setModalProject] = useState(null); 
    const location = useLocation();
    const containerRef = useRef(null);
    const projectRefs = useRef([]);
    const projectCount = 4;

    const projects = [
        {
            title: "[001]",
            image: Projet1,
            description: "Création d'une page web dynamique pour une architecte",
            competences: "JAVASCRIPT",
            githubLink: "#",
        },
        {
            title: "[002]",
            image: Projet2,
            description: "Optimisation du référencement d'un site de photographe",
            competences: "SEO, ACCESSIBILITE",
            githubLink: "#",
        },
        {
            title: "[003]",
            image: Projet3,
            description: "Debug d'un site d'événementiel",
            competences: "REACT",
            githubLink: "#",
        },
        {
            title: "[004]",
            image: Projet4,
            description: "Application de location immobilière",
            competences: "CSS, REACT",
            githubLink: "#",
        },
    ];

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            if (projectRefs.current[0]) {
                projectRefs.current[0].focus();
            }
        }, 50);
    }, [location]);

    const handleKeyDown = (e) => {
        const currentIndex = projectRefs.current.findIndex(
            (el) => document.activeElement === el
        );

        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            if (currentIndex < projectCount - 1) {
                projectRefs.current[currentIndex + 1]?.focus();
            } else {
                const menuLink = document.querySelector('nav a');
                if (menuLink) {
                    menuLink.focus();
                }
            }
        } else if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            if (currentIndex > 0) {
                projectRefs.current[currentIndex - 1]?.focus();
            } else {
                const menuLink = document.querySelector('nav a');
                if (menuLink) {
                    menuLink.focus();
                }
            }
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setModalProject(projects[currentIndex]); 
        }
    };

    const handleClick = (index) => {
        setModalProject(projects[index]); 
    };

    return (
        <>
            <div 
                className='projects-container' 
                ref={containerRef}
                role="group" 
                aria-labelledby="projects-title"
                onKeyDown={handleKeyDown}  
                tabIndex={0}  
            >
                <h2 id="projects-title" className="sr-only">Projets</h2>

                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        competences={project.competences}
                        className={`project project-${index + 1} ${isVisible ? 'animate' : ''}`}
                        ref={(el) => (projectRefs.current[index] = el)}
                        tabIndex={0} 
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>

            <Modal 
                isOpen={!!modalProject} 
                onClose={() => setModalProject(null)} 
                project={modalProject}
            />
        </>
    );
}
