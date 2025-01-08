import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css';
import Project from '../../Components/Project/project';
import Projet1 from '../../Assets/Projects/projet-sophiebluel.png';
import Projet2 from '../../Assets/Projects/projet-ninacarducci.png';
import Projet3 from '../../Assets/Projects/projet-argentbank.png';
import Projet4 from '../../Assets/Projects/projet-kasa.png';


export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const containerRef = useRef(null);
    const projectRefs = useRef([]); 
    const projectCount = 4;

    // Animation d'apparition
    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            // Focus sur le premier projet lors de l'apparition
            if (projectRefs.current[0]) {
                projectRefs.current[0].focus();
            }
        }, 50);
    }, [location]);

    const handleKeyDown = (e) => {
        const currentIndex = projectRefs.current.findIndex(
            (el) => document.activeElement === el
        );

        console.log('Currently focused:', document.activeElement); 

        if (e.key === 'Tab' && !e.shiftKey) {
            // Tab : Passe au prochain projet ou revient au menu
            e.preventDefault();
            if (currentIndex < projectCount - 1) {
                projectRefs.current[currentIndex + 1]?.focus();
            } else {
                // Retourner au menu une fois sur le dernier projet
                const menuLink = document.querySelector('nav a');
                if (menuLink) {
                    menuLink.focus();
                }
            }
        } else if (e.key === 'Tab' && e.shiftKey) {
            // Shift + Tab : Passe au projet précédent ou revient au menu
            e.preventDefault();
            if (currentIndex > 0) {
                projectRefs.current[currentIndex - 1]?.focus();
            } else {
                // Revenir au menu si on est sur le premier projet
                const menuLink = document.querySelector('nav a');
                if (menuLink) {
                    menuLink.focus();
                }
            }
        } else if (e.key === 'Enter' || e.key === ' ') {
            // Enter ou Espace : Clique sur le lien du projet actif
            const currentProject = projectRefs.current[currentIndex];
            if (currentProject) {
                // Recherche du lien <a> à l'intérieur du projet
                const projectLink = currentProject.querySelector('.project-link');
                if (projectLink) {
                    projectLink.click(); 
                }
            }
        }
    };

    return (
        <div 
            className='projects-container' 
            ref={containerRef}
            role="group" 
            aria-labelledby="projects-title"
            onKeyDown={handleKeyDown}  
            tabIndex={0}  
        >
            <h2 id="projects-title" className="sr-only">Projets</h2>

            <Project
                title="[001]"
                image={Projet1}
                link="https://github.com/PaulinePasseri/P6.git"
                description="Création d'une page web dynamique pour une architecte"
                competences="JAVASCRIPT"
                className={`project project-1 ${isVisible ? 'animate' : ''}`}
                ref={(el) => (projectRefs.current[0] = el)}
                tabIndex={0} 
            />

            <Project
                title="[002]"
                image={Projet2}
                link="https://github.com/PaulinePasseri/ninacarducci.git"
                description="Optimisation du référencement d'un site de photographe"
                competences="SEO, ACCESSIBILITE"
                className={`project project-2 ${isVisible ? 'animate' : ''}`}
                ref={(el) => (projectRefs.current[1] = el)}
                tabIndex={0} 
            />

            <Project
                title="[003]"
                image={Projet3}
                link="https://github.com/PaulinePasseri/argent-bank.git"
                description="Application bancaire"
                competences="REACT, REDUX TOOLKIT"
                className={`project project-3 ${isVisible ? 'animate' : ''}`}
                ref={(el) => (projectRefs.current[2] = el)}
                tabIndex={0} 
            />

            <Project
                title="[004]"
                image={Projet4}
                link="https://github.com/PaulinePasseri/kasa.git"
                description="Application de location immobilière"
                competences="CSS, REACT"
                className={`project project-4 ${isVisible ? 'animate' : ''}`}
                ref={(el) => (projectRefs.current[3] = el)}
                tabIndex={0} 
            />
        </div>
    );
}
