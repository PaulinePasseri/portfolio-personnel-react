import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem'; 
import './header.css';
import Logo from '../../Assets/pauline.png'

export default function Header() {
    const menuItems = [
        { text: "Accueil", path: "/" },
        { text: "Projets", path: "/projets" },
        { text: "Compétences", path: "/competences" },
        { text: "Formations", path: "/formations" },
        { text: "Contact", path: "/contact" }
    ];

    return (
        <nav>
           <img src={Logo} alt='logo portfolio' className='logo'/> 
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <MenuItem text={item.text} />
                        </Link>
                    </li>
                ))}
            </ul>
           <button className='btn'>MON CV</button> 
        </nav>
    );
}
