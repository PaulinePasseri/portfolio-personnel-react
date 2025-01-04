import React, { useRef, useEffect } from 'react';
import './projects.css'
import Project from '../../Components/Project/project'
import Projet1 from '../../Assets/logo.png'

export default function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = (e) => {
                e.preventDefault();
                // Multiplier deltaY par un facteur pour accélérer le défilement
                container.scrollLeft += e.deltaY * 8; // Vous pouvez ajuster ce multiplicateur
            };
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <div className='projects-outer-container'>
            <div className='projects-container' ref={containerRef}>
                <Project image={Projet1}/>
                <Project image={Projet1}/>
                <Project image={Projet1}/>
                <Project image={Projet1}/>
            </div>
        </div>
    )
}
