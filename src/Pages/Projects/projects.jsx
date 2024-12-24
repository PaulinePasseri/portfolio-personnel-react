import './projects.css'
import Project from '../../Components/Project/project'
import Projet1 from '../../Assets/2k_moon.jpg'

export default function Projects() {
    return (
        <div className='projects-container'>
            <Project image={Projet1}/>
        </div>
    )
}
