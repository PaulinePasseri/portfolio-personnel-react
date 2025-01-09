import './animatedplanet.css';

export default function AnimatedPlanet({ image, animate }) {
    return (
        <div 
            className={`animated-planet ${animate ? 'animate' : ''}`}
            style={{ backgroundImage: `url(${image})`}}
            alt="planète animée"
        ></div>
    );
}