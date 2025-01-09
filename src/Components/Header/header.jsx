import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';
import './header.css';
import Logo from '../../Assets/logo.png';
import CV from '../../Assets/CV-PP.pdf';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(-1);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = useMemo(() => [
        { text: "Accueil", path: "/" },
        { text: "Projets", path: "/projets" },
        { text: "Competences", path: "/competences" },
        { text: "Formations", path: "/formations" },
        { text: "Contact", path: "/contact" },
        { text: "MON CV", path: CV, isExternal: true }
    ], []);

    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : menuItems.length - 1);
    }, [location, menuItems]);

    const handleNavigation = useCallback((direction) => {
        const newIndex = (activeIndex + direction + menuItems.length) % menuItems.length;
        setActiveIndex(newIndex);
    
        if (!menuItems[newIndex].isExternal) {
            navigate(menuItems[newIndex].path);
        }
    }, [activeIndex, navigate, menuItems]);
    
    const handleKeyDown = useCallback((e) => {
        const isMenuFocused = document.activeElement.closest('nav');
    
        if (isMenuFocused) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const direction = e.shiftKey ? -1 : 1;
                handleNavigation(direction);
            } else if (e.key === 'Enter') {
                const currentItem = menuItems[activeIndex];
                if (currentItem.isExternal) {
                    window.open(currentItem.path, '_blank', 'noopener,noreferrer');
                } else {
                    navigate(currentItem.path);
                }
            }
        }
    }, [activeIndex, handleNavigation, menuItems, navigate]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <nav>
            <img src={Logo} alt="logo portfolio" className="logo" />
            <ul className="menu-items">
                {menuItems.slice(0, -1).map((item, index) => (
                    <li key={index} className={activeIndex === index ? 'active' : ''}>
                        {item.isExternal ? (
                            <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ouvrir ${item.text} dans un nouvel onglet`}
                                className="menu-link"
                            >
                                <MenuItem text={item.text} />
                            </a>
                        ) : (
                            <Link
                                to={item.path}
                                aria-label={`Aller à ${item.text}`}
                                className="menu-link"
                            >
                                <MenuItem text={item.text} />
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir mon CV dans un nouvel onglet"
                className="btn-anim cv-button"
            >
                MON CV
            </a>
            <button className="menu-toggle btn-anim" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {ReactDOM.createPortal(
                <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
                    <button className="close-menu" onClick={() => setMenuOpen(false)}>X</button>
                    <ul className="menu-items">
                        {menuItems.map((item, index) => (
                            <li key={index} className={activeIndex === index ? 'active' : ''}>
                                {item.isExternal ? (
                                    <a
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Ouvrir ${item.text} dans un nouvel onglet`}
                                        className="menu-link"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <MenuItem text={item.text} />
                                    </a>
                                ) : (
                                    <Link
                                        to={item.path}
                                        aria-label={`Aller à ${item.text}`}
                                        className="menu-link"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <MenuItem text={item.text} />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>,
                document.body
            )}
        </nav>
    );
}
