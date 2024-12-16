import './header.css';
import { GlitchText } from 'glitch-text';

export default function Header() {
    const menuItems = [
        "Home",
        "Compétences",
        "Formations",
        "Projets",
        "Contact",
        "Mon CV"
    ];

    return (
        <nav>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <GlitchText text={item} theme='purple'/>
                    </li>
                ))}
            </ul>
        </nav>
    );
}