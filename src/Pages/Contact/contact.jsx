import React, { useState } from 'react';
import Satellite from '../../Assets/satellite.png'
import './contact.css'

export default function Contact() {
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
            <img src={Satellite} alt="Satellite" className="satellite-img"></img>
            <form className="contact-form" onSubmit={handleSubmit}>
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
        </div>
    )
}
