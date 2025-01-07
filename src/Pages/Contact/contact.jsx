import React, { useEffect, useState, useRef } from 'react';
import Satellite from '../../Assets/satellite.png';
import './contact.css';
import { useLocation } from 'react-router-dom';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const formRef = useRef(null);

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            if (formRef.current) {
                formRef.current.querySelector('input[name="name"]').focus();
            }
        }, 50);
    }, [location]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            const focusableElements = formRef.current.querySelectorAll('input, textarea, button');
            const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
            let nextIndex;

            if (e.shiftKey) { // Shift + Tab
                nextIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
            } else { // Tab
                nextIndex = (currentIndex + 1) % focusableElements.length;
            }

            // Focus on the next element
            focusableElements[nextIndex].focus();
            e.preventDefault(); // Prevent the default tab behavior
        }
    };

    return (
        <div className="contact-container">
            <form 
                ref={formRef}
                className={`contact-form ${isVisible ? 'animate' : ''}`} 
                onSubmit={handleSubmit}
                onKeyDown={handleKeyDown}
            >
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
            <img src={Satellite} alt="Satellite" className={`satellite-img ${isVisible ? 'animate' : ''}`} />
        </div>
    );
}
