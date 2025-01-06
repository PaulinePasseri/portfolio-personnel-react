import './project.css';

export default function Project({ link, image, title, description, competences }) {
    return (
        <a href={link} className='project-button'target="_blank" rel="noopener noreferrer">
            <h2>{title}</h2>
            <img className='project-img' src={image} alt="projet" />
            <div className='trapezoid-1'></div>
            <div className='trapezoid-2'></div>
            <div className='project-txt'>
                <h3 className='project-title'>[ DESCRIPTION ] </h3>
                <p>{description}</p>
                <h3 className='project-title'>[ COMPETENCES ]</h3>
                <p>/ {competences}</p>
            </div>
        </a>
    );
}

