import './App.css';
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';
import CustomCursor from './Components/CustomCursor/CustomCursor'; 

export default function App({ children }) {
    return (
        <div className='App'>
            <ParticlesBackground id='particles'/>
            {children} 
            <CustomCursor /> 
        </div>
    );
}
