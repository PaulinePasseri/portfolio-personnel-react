import React, { useEffect, useState } from 'react';
import Satellite from '../../Assets/satellite.png'
import './contact.css'
import { useLocation } from 'react-router-dom';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
            const location = useLocation();
        
            useEffect(() => {
                setIsVisible(false); 
                setTimeout(() => setIsVisible(true), 50); 
            }, [location]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique formulaire
        console.log('Formulaire soumis:', formData);
    };

    return (
        <div className="contact-container">
            <form className={`contact-form ${isVisible ? 'animate' : ''}`} onSubmit={handleSubmit}>
                <h2>Entrons en contact</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    name="message" 
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <img src={Satellite} alt="Satellite" className={`satellite-img ${isVisible ? 'animate' : ''}`}></img>
        </div>
    )
}
