import './footer.css'

export default function Footer() {
    const GitHub='https://github.com/PaulinePasseri'
    const Linkedin='https://www.linkedin.com/in/pauline-passeri-65bbb6139/'
    return (
        <div className='footer-container'>
            <p><i className="fa-regular fa-copyright"></i> 2025 Pauline Passeri. Tous droits réservés.</p>
            <div className='icons'>
                <a href={GitHub} target='_blank' rel="noreferrer noopener"><i className="fa-brands fa-github"></i></a>
                <a href={Linkedin} target='_blank' rel='noreferrer noopener'><i className="fa-brands fa-linkedin"></i></a>
            </div>
            
        </div>
    )
}