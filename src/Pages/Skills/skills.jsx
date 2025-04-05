import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Astronaut from '../../Assets/astronaut.webp'
import './skills.css'
import Skill from '../../Components/Skill/skill'
import Technology from '../../Components/Technologies/technologies';
import HTML from '../../Assets/Logos/html-logo.webp'
import CSS from '../../Assets/Logos/css-logo.webp'
import REACT from '../../Assets/Logos/react-logo.webp'
import JS from '../../Assets/Logos/javascript-logo.webp'
import EXPRESS from '../../Assets/Logos/express-logo.webp'
import NODEJS from '../../Assets/Logos/nodejs-logo.webp'
import NEXTJS from '../../Assets/Logos/nextjs-logo.webp'
import MONGODB from '../../Assets/Logos/mongodb-logo.webp'

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
                    <Technology image={HTML} altTitle='logo HTML' technology='HTML'/>
                    <Technology image={CSS} altTitle='logo CSS' technology='CSS'/>
                    <Technology image={JS} altTitle='logo Javascript' technology='Javascript'/>
                    <Technology image={REACT} altTitle='logo React' technology='React'/>
                    <Technology image={NODEJS} altTitle='logo NodeJS' technology='NodeJS'/>
                    <Technology image={EXPRESS} altTitle='logo Express' technology='Express'/>
                    <Technology image={NEXTJS} altTitle='logo NextJS' technology='NextJS'/>
                    <Technology image={MONGODB} altTitle='logo MongoDB' technology='MongoDB'/>
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
