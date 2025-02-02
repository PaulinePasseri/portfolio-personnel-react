import './App.css';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';

export default function App({ children }) {
    return (
        <div className='App'>
            <ParticlesBackground id='particles'/>
            {children} 
        </div>
    );
}
