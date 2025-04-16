import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css';
import Project from '../../Components/Project/project';
import Modal from '../../Components/Modal/modal';
import Projet1 from '../../Assets/Projects/projet-sophiebluel.webp';
import Projet2 from '../../Assets/Projects/projet-ninacarducci.webp';
import Projet3 from '../../Assets/Projects/projet-724events.webp';
import Projet4 from '../../Assets/Projects/projet-tickethack.png';
import Cover1 from '../../Assets/Projects/projet-sophiebluel2.webp';
import Cover2 from '../../Assets/Projects/projet-ninacarducci2.webp';
import Cover3 from '../../Assets/Projects/projet-724events2.webp';
import Cover4 from '../../Assets/Projects/projet-kasa2.webp';

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
            cover: Cover1,
            description: "Création d'une page web dynamique pour une architecte",
            details: "Utilisation d'une API pour gérer et filter les projets, la connexion de l'utilisateur et la persistance des données.",
            competences: "JAVASCRIPT",
            vercelLink: "https://github.com/PaulinePasseri/P6.git",
        },
        {
            title: "[002]",
            image: Projet2,
            cover: Cover2,
            description: "Optimisation du référencement d'un site de photographe",
            details: "Utilisation de Lighthouse et WAVE pour optimiser la performance, le SEO, les bonnes pratiques et l'accessibilité du site.",
            competences: "SEO, ACCESSIBILITE",
            vercelLink: "https://github.com/PaulinePasseri/ninacarducci.git",
        },
        {
            title: "[003]",
            image: Projet3,
            cover: Cover3,
            description: "Debug d'un site d'une agence d'événementiel",
            details: "Utilisation des tests unitaires et d'intégration ainsi que des Devtools pour debugger une application React.",
            competences: "REACT, DEVTOOLS",
            vercelLink: "https://github.com/PaulinePasseri/Debuggez-une-application-React.JS-main.git",
        },
        {
            title: "[004]",
            image: Projet4,
            cover: Cover4,
            description: "Application de réservation de billets de train",
            details: "Utilisation de NodeJs, Express et Javascript pour créer des routes vers une base de données noSQL et intégration du frontend",
            competences: "NODEJS, EXPRESS, JAVASCRIPT",
            vercelLink: "https://tickethack-frontend-tau.vercel.app"
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
                        image={project.cover}
                        description={project.description}
                        competences={project.competences}
                        className={`project-${index + 1} ${isVisible ? 'animate' : ''}`}
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
