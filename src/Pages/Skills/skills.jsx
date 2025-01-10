import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Astronaut from '../../Assets/astronaut.webp'
import './skills.css'
import Skill from '../../Components/Skill/skill'
import HTML from '../../Assets/Logos/html-logo.webp'
import CSS from '../../Assets/Logos/css-logo.webp'
import REACT from '../../Assets/Logos/react-logo.webp'
import JS from '../../Assets/Logos/javascript-logo.webp'

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(false); 
        setTimeout(() => setIsVisible(true), 50); 
    }, [location]);
    return (
        <div className="skills-container">
            <img className={`astronaut-img ${isVisible ? 'animate' : ''}`} src={Astronaut} alt="Astronaute dans l'espace"></img>
            <div className={`technical-skills-container ${isVisible ? 'animate' : ''}`}>
                <h2>Technologies</h2>
                <div className='technical-skills'>
                    <img className='logo-img' src={HTML} alt='logo HTML'></img>
                    <img className='logo-img' src={CSS} alt='logo CSS'></img>
                    <img className='logo-img' src={JS} alt='logo Javascript'></img>
                    <img className='logo-img' src={REACT} alt='logo React'></img>
                </div>
            </div>
            <div className={`soft-skills-container ${isVisible ? 'animate' : ''}`}>
                <h2>Soft skills</h2>
                <div className='soft-skills'>
                    <Skill skill='Gestion du temps'/>
                    <Skill skill='Adaptabilité'/>
                    <Skill skill='Esprit logique'/>
                    <Skill skill='Polyvalence'/>
                    <Skill skill='Communication'/>
                    <Skill skill='Organisation'/>
                </div>
            </div>
        </div>
    )
}
