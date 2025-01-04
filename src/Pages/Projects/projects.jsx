import React, { useRef } from 'react';
import './projects.css';
import Project from '../../Components/Project/project';
import Projet1 from '../../Assets/logo.png';

export default function Projects() {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    const handleWheel = (event) => {
        if (containerRef.current) {
            event.preventDefault(); // Empêche le défilement vertical par défaut
            containerRef.current.scrollBy({ left: event.deltaY, behavior: 'smooth' });
        }
    };

    return (
        <div className="projects-outer-container">
            <button onClick={scrollLeft} className="scroll-button">◀</button>
            <div
                ref={containerRef}
                className="projects-container"
                onWheel={handleWheel} // Gestionnaire de la molette
            >
                <Project image={Projet1} />
                <Project image={Projet1} />
                <Project image={Projet1} />
                <Project image={Projet1} />
            </div>
            <button onClick={scrollRight} className="scroll-button">▶</button>
        </div>
    );
}
