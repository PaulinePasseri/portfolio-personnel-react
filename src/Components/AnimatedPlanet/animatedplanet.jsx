import './animatedplanet.css';

export default function AnimatedPlanet({ image, position={} }) {
    return (
        <div 
            className="animated-planet" 
            style={{ backgroundImage: `url(${image})`, ...position}}
            alt="planète animée"
        ></div>
    );
}