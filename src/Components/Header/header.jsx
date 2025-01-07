import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem'; 
import './header.css';
import Logo from '../../Assets/logo.png';
import CV from '../../Assets/CV-PP.pdf';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const menuItems = useMemo(() => [
        { text: "Accueil", path: "/" },
        { text: "Projets", path: "/projets" },
        { text: "Competences", path: "/competences" },
        { text: "Formations", path: "/formations" },
        { text: "Contact", path: "/contact" },
        { text: "MON CV", path: CV, isExternal: true }
    ], []);

    // Synchroniser l'élément actif avec la route actuelle
    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : menuItems.length - 1);
    }, [location, menuItems]);

    // Gestion du clavier pour Tab/Enter
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const direction = e.shiftKey ? -1 : 1;
                const newIndex = (activeIndex + direction + menuItems.length) % menuItems.length;
                setActiveIndex(newIndex);
                if (!menuItems[newIndex].isExternal) {
                    navigate(menuItems[newIndex].path);
                }
            } else if (e.key === 'Enter') {
                const currentItem = menuItems[activeIndex];
                if (currentItem.isExternal) {
                    window.open(currentItem.path, '_blank', 'noopener,noreferrer');
                } else {
                    navigate(currentItem.path);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, navigate, menuItems]);

    // Gestion du scroll de la souris
    useEffect(() => {
        const handleWheel = (e) => {
            const sensitivityThreshold = 30;
            const direction = e.deltaY > sensitivityThreshold ? 1 : e.deltaY < -sensitivityThreshold ? -1 : 0; // deltaY > 0 : Scroll bas, deltaY < 0 : Scroll haut
            const newIndex = (activeIndex + direction + menuItems.length) % menuItems.length;
            setActiveIndex(newIndex);
            if (direction === 0) return;

            const currentItem = menuItems[newIndex];
            if (currentItem.isExternal) {
                // Pas de navigation directe pour les liens externes
                return;
            }
            navigate(currentItem.path);
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [activeIndex, navigate, menuItems]);

    return (
        <nav>
            <img src={Logo} alt="logo portfolio" className="logo" /> 
            <ul>
                {menuItems.slice(0, -1).map((item, index) => (
                    <li 
                        key={index} 
                        className={activeIndex === index ? 'active' : ''}
                    >
                        <Link 
                            to={item.path}
                            aria-label={`Aller à ${item.text}`}
                            tabIndex={-1}
                        >
                            <MenuItem text={item.text} />
                        </Link>
                    </li>
                ))}
            </ul>
            <a 
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir mon CV dans un nouvel onglet"
                tabIndex={0}
                className={`btn-anim ${activeIndex === menuItems.length - 1 ? 'active' : ''}`}
            >
                MON CV
            </a>
        </nav>
    );
}
