import AnimatedPlanet from "../../Components/AnimatedPlanet/animatedplanet"
import Moon from '../../Assets/2k_moon.jpg'
import './home.css'

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-txt">
                <h1>Bonjour<br />Je suis Pauline Passeri</h1>
                <strong className="text-highlight">Web developer</strong>
            </div>
            <AnimatedPlanet image={Moon} position={{right:'180px'}} />
        </div>
    )
}