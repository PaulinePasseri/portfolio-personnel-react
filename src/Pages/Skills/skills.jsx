import Astronaut from '../../Assets/astronaut.png'
import './skills.css'
import Skill from '../../Components/Skill/skill'

export default function Skills() {
    return (
        <div className="skills-container">
            <img src={Astronaut} alt="Astronaute dans l'espace"></img>
            <div className='technical-skills-container'>
                <h2>Technologies</h2>
            </div>
            <div className='soft-skills-container'>
                <h2>Soft skills</h2>
                <div className='soft-skills'>
                    <Skill skill='Gestion du temps'/>
                    <Skill skill='Adaptabilité'/>
                    <Skill skill='Esprit logique'/>
                    <Skill skill='Polyvalence'/>
                    <Skill skill='Communication'/>
                    <Skill skill='Organisation'/>
                </div>
            </div>
        </div>
    )
}
