import AnimatedPlanet from "../../Components/AnimatedPlanet/animatedplanet"
import Earth from '../../Assets/Earth_Texture_Full.webp'
import './skills.css'

export default function Skills() {
    return (
        <div className="skills-container">
            <AnimatedPlanet image={Earth} position={{right:'180px'}} />
        </div>
    )
}
