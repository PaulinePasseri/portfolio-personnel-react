import React, { useEffect, useState } from 'react';
import AnimatedPlanet from "../../Components/AnimatedPlanet/animatedplanet"
import Moon from '../../Assets/2k_moon.jpg'
import './home.css'
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
        const location = useLocation();
    
        useEffect(() => {
            setIsVisible(false); 
            setTimeout(() => setIsVisible(true), 50); 
        }, [location]);
    return (
        <div className="home-container">
            <div className={`home-txt ${isVisible ? 'animate' : ''}`}>
                <h1>Bonjour<br />Je suis Pauline Passeri</h1>
                <strong className="text-highlight">Développeuse frontend</strong>
                <p className='home-bio'>
                Après un diplôme d'ingénieur, j'ai fait le choix de me réorienter vers le développement web, un domaine qui me passionne profondément. 
                <br />
                Mon objectif est de créer des applications intuitives et innovantes qui répondent aux besoins des utilisateurs tout en restant à la pointe des technologies.
                </p>
            </div>
            <AnimatedPlanet image={Moon} animate={isVisible}/> 
        </div>
    )
}