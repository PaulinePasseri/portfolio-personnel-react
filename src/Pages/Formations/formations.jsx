import AnimatedPlanet from "../../Components/AnimatedPlanet/animatedplanet"
import Neptune from '../../Assets/Dh_neptune_texture.webp'
import './formations.css'

export default function Formations() {
    return (
        <div className="sub-container">
            <AnimatedPlanet image={Neptune} position={{right:'180px'}} />
        </div>
    )
}
