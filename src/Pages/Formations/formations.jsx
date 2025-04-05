import React, { useEffect, useState } from 'react';
import Rocket from '../../Assets/rocket.webp'
import './formations.css'
import Formation from '../../Components/Formation/formation'
import LaCapsule from '../../Assets/Logos/lacapsule-logo.webp'
import OC from '../../Assets/Logos/oc-logo.webp'
import Agro from '../../Assets/Logos/agro-logo.webp'
import Agrifeel from '../../Assets/Logos/agrifeel-logo.webp'
import Koppert from '../../Assets/Logos/koppert-logo.webp'
import { useLocation } from 'react-router-dom';

export default function Formations() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(false); 
        setTimeout(() => setIsVisible(true), 50); 
    }, [location]);

    return (
        <div className="formations-container">
            <div className={`left-container ${isVisible ? 'animate' : ''}`}>
                <h2>Formations</h2>
                <Formation logo={LaCapsule} title="Développeur fullstack" paragraph="La Capsule - 400h" link="https://www.lacapsule.academy"/>
                <Formation logo={OC} title="Intégrateur web" paragraph="OpenClassrooms - 603h" link="https://openclassrooms.com/fr"/>
                <Formation logo={Agro} title="Ingénieur en protection des plantes" paragraph="Institut Agro - 5 ans" link="https://www.institut-agro.fr/fr"/>
            </div>
            <img src={Rocket} alt="fusée" className={`rocket-img ${isVisible ? 'animate' : ''}`}></img>
            <div className={`right-container ${isVisible ? 'animate' : ''}`}>
                <h2>Experiences</h2>
                <Formation logo={Agrifeel} title="Technico-commerciale en maraîchage" paragraph="Groupe Terres du Sud - 2 ans" link="https://www.groupe-terresdusud.fr"/>
                <Formation logo={Koppert} title="Technico-commerciale en maraîchage" paragraph="Koppert - 18 mois" link="https://www.koppert.fr"/>
            </div>
        </div>
    )
}
