import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './projects.css'
import Project from '../../Components/Project/project'
import Projet1 from '../../Assets//Projects/projet1.png'

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(false); 
        setTimeout(() => setIsVisible(true), 50); 
    }, [location]);

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = (e) => {
                e.preventDefault();
                // Multiplier deltaY par un facteur pour accélérer le défilement
                container.scrollLeft += e.deltaY * 2.5; // Vous pouvez ajuster ce multiplicateur
            };
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <div className={`projects-outer-container ${isVisible ? 'animate' : ''}`}>
            <div className='projects-container' ref={containerRef}>
                <Project title='[001]' image={Projet1} link='https://paulinepasseri.github.io/quizzpokemon/' description='Quizz Pokemon' competences='JAVASCRIPT'/>
                <Project image={Projet1}/>
                <Project image={Projet1}/>
                <Project image={Projet1}/>
            </div>
        </div>
    )
}
