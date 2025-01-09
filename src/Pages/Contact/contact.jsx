import React, { useEffect, useState, useRef } from 'react';
import Satellite from '../../Assets/satellite.png';
import './contact.css';
import { useLocation } from 'react-router-dom';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [confirmationMessage, setConfirmationMessage] = useState('');

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            if (formRef.current) {
                formRef.current.querySelector('input[name="name"]').focus();
            }
        }, 50);
    }, [location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
        setConfirmationMessage('Votre message a été envoyé avec succès !');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        setTimeout(() => {
            setConfirmationMessage('');
        }, 5000); 
    };

    const handleLastTab = (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            const menu = document.querySelector('nav a');
            if (menu) menu.focus();
        }
    };

    return (
        <div className="contact-container">
            <form
                ref={formRef}
                className={`contact-form ${isVisible ? 'animate' : ''}`}
                onSubmit={handleSubmit}
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
                <button
                    type="submit"
                    onKeyDown={handleLastTab}
                >
                    Envoyer
                </button>
                {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
            </form>
            <img src={Satellite} alt="Satellite" className={`satellite-img ${isVisible ? 'animate' : ''}`} />
        </div>
    );
}
