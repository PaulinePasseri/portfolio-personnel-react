import Rocket from '../../Assets/rocket.png'
import './formations.css'
import Formation from '../../Components/Formation/formation'
import OC from '../../Assets/Logos/oc-logo.png'
import Agro from '../../Assets/Logos/agro-logo.png'
import Agrifeel from '../../Assets/Logos/agrifeel-logo.png'
import Koppert from '../../Assets/Logos/koppert-logo.png'

export default function Formations() {
    return (
        <div className="formations-container">
            <img src={Rocket} alt="fusée" className='rocket-img'></img>
            <div className='left-container'>
                <h2>Formations</h2>
                <Formation logo={OC} title="Intégrateur web" paragraph="OpenClassrooms - 9 mois" link="https://openclassrooms.com/fr"/>
                <Formation logo={Agro} title="Ingénieur en protection des plantes" paragraph="Institut Agro - 5 ans" link="https://www.institut-agro.fr/fr"/>
            </div>
            <div className='right-container'>
                <h2>Experiences</h2>
                <Formation logo={Agrifeel} title="Technico-commerciale en maraîchage" paragraph="Groupe Terres du Sud - 2 ans" link="https://www.groupe-terresdusud.fr"/>
                <Formation logo={Koppert} title="Technico-commerciale en maraîchage" paragraph="Koppert - 18 mois" link="https://www.koppert.fr"/>
            </div>
        </div>
    )
}
