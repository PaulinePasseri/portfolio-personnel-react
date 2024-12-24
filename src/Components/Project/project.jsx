import './project.css';

export default function Project({ image }) {
    return (
        <button className="project-button">
            <img src={image} alt="projet" />
        </button>
    );
}