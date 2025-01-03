import './formation.css'

export default function Formation({logo, title, paragraph, link}) {
    return(
        <a href={link} className="formation-link" target="_blank" rel="noopener noreferrer">
            <div className="formation-container">
                <img src={logo} alt="Logo" className="formation-logo" />
                <div className='formation-text'>
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                </div>
            </div>
        </a>
    )
}