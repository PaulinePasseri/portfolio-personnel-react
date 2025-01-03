import './animatedplanet.css';

export default function AnimatedPlanet({ image, position={}, animate }) {
    return (
        <div 
            className={`animated-planet ${animate ? 'animate' : ''}`}
            style={{ backgroundImage: `url(${image})`, ...position}}
            alt="planète animée"
        ></div>
    );
}