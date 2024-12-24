import './footer.css'

export default function Footer() {
    const GitHub='https://github.com/PaulinePasseri'
    const Linkedin='https://www.linkedin.com/in/pauline-passeri-65bbb6139/'
    return (
        <div className='footer-container'>
            <p><i class="fa-regular fa-copyright"></i> Tous droits réservés.</p>
            <div className='icons'>
                <a href={GitHub} target='_blank' rel="noreferrer noopener"><i class="fa-brands fa-github"></i></a>
                <a href={Linkedin} target='_blank' rel='noreferrer noopener'><i class="fa-brands fa-linkedin"></i></a>
            </div>
            
        </div>
    )
}