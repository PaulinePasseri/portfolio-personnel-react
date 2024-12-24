import './animatedplanet.css';

export default function AnimatedPlanet({ image }) {
    return (
        <div 
            className="animated-planet" 
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    );
}