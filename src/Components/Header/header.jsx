import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem'; 
import './header.css';

export default function Header() {
    const menuItems = [
        { text: "Pauline Passeri", path: "/" },
        { text: "Projets", path: "/projets" },
        { text: "Contact", path: "/contact" },
        { text: "Compétences", path: "/competences" },
        { text: "Formations", path: "/formations" },
        { text: "Mon CV", path: "/cv" }
    ];

    return (
        <nav>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <MenuItem text={item.text} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
