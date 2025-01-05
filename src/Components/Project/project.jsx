import './project.css';

export default function Project({ image, title, description, competences }) {
    return (
        <button className='project-button'>
            <h2>{title}</h2>
            <div className='project-img'>
                <img src={image} alt="projet" />
            </div>
            <div className='trapezoid-1'></div>
            <div className='trapezoid-2'></div>
            <div className='project-txt'>
                <h3>[ DESCRIPTION ] </h3>
                <p>{description}</p>
                <h3>[ COMPETENCES ]</h3>
                <p>/ {competences}</p>
            </div>
        </button>
    );
}