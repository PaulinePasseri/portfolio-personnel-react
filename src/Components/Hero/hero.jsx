import './hero.css';
import AnimatedPlanet from '../AnimatedPlanet/animatedplanet';
import Moon from '../../Assets/2k_moon.jpg'

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-txt">
                <h1>Bonjour<br />Je suis Pauline Passeri</h1>
                <strong className="text-highlight">Web developer</strong>
            </div>
            <AnimatedPlanet image={Moon} position={{right:'180px'}} />
        </section>
    );
}