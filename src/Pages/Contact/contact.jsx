import AnimatedPlanet from "../../Components/AnimatedPlanet/animatedplanet"
import Mars from '../../Assets/Mars_NASA_4k.webp'
import './contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <AnimatedPlanet image={Mars} position={{right:'180px'}} />
        </div>
    )
}
