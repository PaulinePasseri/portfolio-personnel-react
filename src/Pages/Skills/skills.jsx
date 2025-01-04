import Astronaut from '../../Assets/astronaut.png'
import './skills.css'

export default function Skills() {
    return (
        <div className="skills-container">
            <img src={Astronaut} alt="Astronaute dans l'espace"></img>
            <div className='technical-skills'></div>
            <div className='soft-skills'></div>
        </div>
    )
}
