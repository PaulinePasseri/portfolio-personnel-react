import React, { useEffect, useState } from 'react';
import Rocket from '../../Assets/rocket.png'
import './formations.css'
import Formation from '../../Components/Formation/formation'
import OC from '../../Assets/Logos/oc-logo.png'
import Agro from '../../Assets/Logos/agro-logo.png'
import Agrifeel from '../../Assets/Logos/agrifeel-logo.png'
import Koppert from '../../Assets/Logos/koppert-logo.png'
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
                <Formation logo={OC} title="Intégrateur web" paragraph="OpenClassrooms - 9 mois" link="https://openclassrooms.com/fr"/>
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
