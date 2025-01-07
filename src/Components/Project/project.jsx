import './project.css';

export default function Project({ link, image, title, description, competences, className, isFocused }) {
    return (
        <div className={`project-button ${className} ${isFocused ? 'focused' : ''}`} role="button" tabIndex={0}>
            <a className='project-link' href={link} target="_blank" rel="noopener noreferrer">
                <h2 className='project-title'>{title}</h2>
                <div className='project-content'>
                    <img className='project-img' src={image} alt="projet" />
                    <div className='project-txt'>
                        <h3 className='project-subtitle'>[ Description ]</h3>
                        <p>{description}</p>
                        <h3 className='project-subtitle'>[ Compétences ]</h3>
                        <p>/ {competences}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}
